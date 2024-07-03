const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Login")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed to connected');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model('Collection1',logInSchema)

module.exports=collection