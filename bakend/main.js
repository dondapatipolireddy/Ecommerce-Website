import express from 'express'
import mongoose from 'mongoose'
import {PORT} from "./env"
import rcart from "./routes/rcart.js"
import ruser from "./routes/ruser.js"

const url="mongodb://localhost:27017/studentDB"

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose
    .connect(url)
    .then(()=>console.log("connected to mongoose"))
    .catch((err)=>console.error("could not connect to MongoDB",err));

app.use("/api/Students",ruser);
app.use("/api/Cart",rcart);

app.listen(PORT,()=>{
    console.log("server running at port no:",PORT);
})