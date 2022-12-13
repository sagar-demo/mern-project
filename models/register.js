const mongoose=require('mongoose');
const registeration=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Currentweight:{
        type:String,
        required:true
    },
    DesigredWeight:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
const Register=mongoose.model('Register',registeration);
module.exports=Register;