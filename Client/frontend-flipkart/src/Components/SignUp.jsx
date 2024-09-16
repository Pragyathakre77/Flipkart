
import './Signup.css'

import axios from 'axios'
import React, { useState} from 'react'

const SignUp = () => {
  let [input, setinput] = useState({
    Name:"",
    Email:"",
    passWord:""
  });

  let fun1=(e)=>{
  let {name,value}=e.target
  setinput({...input,[name]:value})
  }
 
  async function done(e){
    e.preventDefault();
    console.log("chal gya");
  let res = await axios.post('http://localhost:4000/api/users',input)
  console.log(res,'resssss');
//  if(res.data=='hiiiii'){
//   alert('signup ho gya haiii')
  }

  return (
<div class="form-box">
   <form class="form" action='' onSubmit={done}>
    <span class="title">Sign up</span>
    <span class="subtitle">Create a free account with your email.</span>
    <div class="form-container">
      <input type="text" name='Name'  class="input" placeholder="Name" onChange={fun1} value={input.Name}/>
			<input type="email" name='Email'  class="input" placeholder="Email" onChange={fun1} value={input.Email}/>
			<input type="password" name='passWord' class="input" placeholder="Password" onChange={fun1} value={input.passWord}/>
    </div>
    <button >Sign up</button>
  </form>
  <div class="form-section">
  <p>Have an account? <a href="/Login">Log in</a> </p>
  
  </div>
</div>
  )
}

export default SignUp
