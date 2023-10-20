const route=require('express').Router()

const Category=require('../Models/CategoryModel')
const Prd=require('../Models/PrdModel')
const multer=require('multer')

route.get('/addPrd',(req,res)=>{
    //  res.sendFile(__dirname+'../src/app/add-prd/add-prd.component.html')
    Category.find()
    .then((category)=>{res.json(category)})
    .catch((err)=>{res.json(err)})
})
const storage=multer.diskStorage({
        destination:(req,res,cb)=>{
            cb(null,"assets/public/imgs/")
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+"-"+file.originalname)
        }
})
const upload=multer({storage:storage})


route.post('/insert',upload.single('image'),(req,res)=>{
    console.log(req.body)
    if(req.file)
    {
        console.log(req.file)
    }
   var prdData=new Prd({
    PrdName:req.body.pname,
    Category:req.body.cname,
    Price:req.body.price,
    Qnty:req.body.qtny,
    // Photo: req.file.filename
    Photo:req.body.image
   })
    prdData.save(prdData)
    .then(()=>{console.log("Data Added")})
    .catch((err)=>{console.log(err)})
})
route.get('/edit/:id',(req,res)=>{
    console.log(req.params.id)
    Prd.findById({_id:req.params.id})   
    .then((data)=>{
        console.log(data)
         Category.find()
        .then((cat)=>{res.json(data)})
        .catch((err)=>{res.send(err)})})
    .catch((err)=>{console.log(err)})
})
route.post('/edit/:id',upload.single("profile"),(req,res)=>{
    Prd.findByIdAndUpdate(req.params.id,{
        PrdName:req.body.pname,
        Category:req.body.cname,
        Price:req.body.price,
        Qnty:req.body.qtny,
        // Photo: req.file.filename
        // Photo:req.body.image
    })
    .then((data)=>{res.json("data")})
    .catch((err)=>{res.send(err)})
})
route.get('/delete/:id',(req,res)=>{
    Prd.findOneAndRemove(req.params.id)
    .then(()=>{console.log("call")
    res.redirect('deleted')})
    .catch((err)=>{res.send(err)})
})
route.get('/',(req,res)=>{
    // res.sendFile(__dirname+'../src/app/app.component.html')
    Prd.find()
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
})
module.exports=route;