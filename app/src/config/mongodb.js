const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/demo');
        console.log("Connect mongodb successfully");
    }
    catch(error){
        await mongoose.close();
        console.log("Connect mongodb failed");
    }
}

module.exports = { connect };