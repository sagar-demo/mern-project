const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email_id:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;