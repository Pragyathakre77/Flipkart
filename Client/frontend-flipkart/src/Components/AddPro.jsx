import React, { useState} from 'react'
import axios from 'axios'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nejvtkycindihtmtyzio.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lanZ0a3ljaW5kaWh0bXR5emlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3NzQwNTYsImV4cCI6MjAzODM1MDA1Nn0.URz8J6YSdG5db8GvAF3VTeglCD-9Ljf3nkt8jFUdFuE';
const supabase = createClient(supabaseUrl, supabaseKey)

const AddPro = () => {
  let [product, setProduct] = useState({
    name:"",
    description:"",
    price:"",
    images:""
  });

  let fun1=(e)=>{
    let {name,value}=e.target
    setProduct({...product,[name]:value})
  }

  const handleImageChange=(e)=>{
    //  console.log(e.target.files,"hiiiee");
     const file = e.target.files[0]
    //  console.log(file);
     setProduct({...product,images:file})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Supabase
      const { data, error } = await supabase.storage.from('Pragya').upload('product_images/' + product.images.name, product.images);
      if (error) {
        throw error;
      }
     
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/Pragya/product_images/${product.images.name}`;
      console.log(imageUrl,"blocking zzzzzzz");
  
      // Save restaurant data to MongoDB with image URL
      const response = await axios.post('http://localhost:4000/api/product ', { ...product, images:imageUrl });
      if (response) {
        alert('product Added');
        // Reset form fields
     
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding image:', error);
      alert('Failed to add image');
    }
  };

  return (
    <div>
      <input type="text" placeholder='Product name' name='name' onChange={fun1} value={product.name}/>
      <input type="text" placeholder='Description' name='description' onChange={fun1} value={product.description}/>
      <input type="number" placeholder='price' name='price' onChange={fun1} value={product.price} />
      <input type="file" placeholder='image' name='images' onChange={handleImageChange}  />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  )
}

export default AddPro


