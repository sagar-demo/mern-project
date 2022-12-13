// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/fitness_db');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


// db.once('open', function(){
//     console.log('Connected to Database :: MongoDB');
// });

// ******CONNECTING TO MONGODB ATLAS ONLINE**************
const mongoose = require('mongoose');
const db='mongodb+srv://sagar:zcRD6B3eBJTkKUB8@cluster0.ju3zsgs.mongodb.net/fitness_db?retryWrites=true&w=majority';

const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
};
mongoose.connect(db,connectionparams).then(()=>{console.log('connected to  the database');})
.catch((e)=>{
    console.log('Error:',e);
});
module.exports = db;