let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let app = express()
mongoose.connect('mongodb://127.0.0.1:27017/Flipkart').then(()=>{
    console.log("chl gya");
}).catch((err)=>{
    console.log("nhi chla",err);
});
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('hellooo')
// })
app.use(express.json())     //to fetch json data
let signupRoutes = require ('./routes/Signup')
let loginRoutes = require('./routes/Login')
let product = require('./routes/Product')
app.use('/api',signupRoutes)
app.use('/api',loginRoutes)
app.use('/api',product)

app.listen(4000,()=>{
    console.log("server running");
})