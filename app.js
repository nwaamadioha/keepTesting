import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});






app.get("/", function(req, res){
    res.send("Hello World")
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server started successfully !")
});