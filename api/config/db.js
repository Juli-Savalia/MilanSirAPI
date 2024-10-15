const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/api");

const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("db start");
    
})

module.exports = db