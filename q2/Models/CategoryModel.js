const mongoose=require('mongoose')

const CatSchema=mongoose.Schema({
    CatName:String
})

const category=mongoose.model("category",CatSchema)

module.exports=category;