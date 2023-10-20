const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/ASSINMENT3')
.then(()=>{console.log("Connected")})
.catch((err)=>{console.log(err)})