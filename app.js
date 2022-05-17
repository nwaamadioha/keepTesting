import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to mongoDB");
    } catch (error) {
        throw error;
    }
};







app.get("/", function(req, res){
    res.send("Hello World")
});


app.listen(process.env.PORT || 3000, function(){
    connect()
    console.log("Server started successfully !")
});