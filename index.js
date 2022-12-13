const { urlencoded } = require('express');
const express=require('express');
const path=require('path');
const port =process.env.PORT || 500;
//including the mongoose file
const db=require('./config/mongoose');
const Contact = require('./models/contact');
const contact=require('./models/contact');
const Register=require('./models/register');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//parse or middle 
app.use(urlencoded());
//static file to read html or css file 
app.use(express.static('assets'));

//middle creating 
// app.use((req,res,next)=>{
//     console.log('middle ware is called');
//     next()
//     console.log(next);
//     console.log(req);
// })

//router it takes call back function
//home controller
app.get('/',function(req,res){
    // console.log(__dirname);
    return res.render('home',{title:"Fitness app"});
})
//register page controller
app.get('/registerPage',function(req,res){
    return res.render('register',
    {title:"register"}
    );
})
//about controller
app.get('/about',function(req,res){
   return res.render('about',{title:'about'});
});
//contact controller
// array to take the data from contact db
const contactpage=[];
app.get('/contact',function(req,res){
    // Feteching the data from database
    Contact.find({},function(err,contacts){
        if(err)
        {
            console.log('Error in Feteching contacts from db');
            return;
        }
    
    return res.render('contact',
    {
        title:"contactpage",
        contactpage:contacts
    });
})

});
// //contact list or object
// const contact_list=[
//     {
//      firstName:"Sagar",
//      lastName:"Rana",
//      email_id:"sagar@gmail.com",
//      message:"Hii Sagar"   
//     },
//     {
//         firstName:"Aku",
//         lastName:"preet",
//         email_id:"aku@gmail.com",
//         message:"hii this is aku"
//     }
   
// ]
app.post('/contact-route',function(req,res){
    //pusing the data in array contact_list
    //console.log(req.body);
    // another way
    // contact_list.push({
    //     firstName:req.body.firstName,
    //     lastName:req.body.lastName,
    //     email_id:req.body.email_id,
    //     message:req.body.message
    // })
    // ********Pushing the data in database**************
    Contact.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email_id:req.body.email_id,
        message:req.body.message
    },function(err){
        if(err){
            console.log('Error in creating a contact!');
        }
         console.log('Field is created in database');
        return res.redirect('/contact')
    })
})
//deleting the data from contact db
app.get('/delete-contact',function(req,res){
    //get the id form query in the url
    let id=req.query.id;
    //find the contact in the database using id and delete
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting an object from database',err);
            return;
        }
        return res.redirect('back')
    })

})
//registerpage controller
app.post('/create-register',function(req,res){
    Register.create({
        firstName:req.body.firstName,
        LastName:req.body.LastName,
        Currentweight:req.body.Currentweight,
        DesigredWeight:req.body.DesigredWeight,
        address:req.body.address,
        email:req.body.email,
        password:req.body.password
    },function(err){
        if(err){console.log('error in creating a registerpage!',err);return}
        console.log('***Inserted Data in db******');
        return res.redirect('back');
    })

});
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('Express server is running ',port);
})