const mongoose=require('mongoose')

const PrdSchema=mongoose.Schema({
    PrdName:String,
    Category:String,
    Price:Number,
    Qnty:Number,
    Photo:String
})

const prd=mongoose.model("prd",PrdSchema)

module.exports=prd;