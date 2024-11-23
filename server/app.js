const express = require("express")
const app = express()
require("dotenv").config()
app.get("/",(req,res)=>{
    res.send("hello")
})

const connectDB=require("./models/db")
connectDB();
app.listen(process.env.PORT,()=>{
    console.log("server connect")
})