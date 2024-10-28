const mongoose = require("mongoose");

uri = "mongodb+srv://sharmayashi270:LP3BAAqPs9GmE9Ns@cluster0.dji9y.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = () =>{
    console.log("connect DB")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;