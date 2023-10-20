const express=require('express');
const app=express();
const cors=require('cors')
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cors({
    origin:"http://localhost:4200"
}))


require('./DB/config');
app.listen(8000,()=>{
    console.log("Listeninng on 8000");
})
const PrdRoute=require('./Routes/PrdRoutes');

app.use('/',PrdRoute)