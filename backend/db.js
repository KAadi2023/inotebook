const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, console.log("Database Connected SuccessFully"))
}

module.exports = connectToMongo;