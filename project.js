import express from 'express'
import mongoose from 'mongoose'
import {PORT} from './env'
const database="mongodb://localhost:27017/EcommerceWebsite"
const E_app=express()
E_app.use(express.json())
E_app.use(express.urlencoded({extended:true}))

mongoose
    .connect(database)
    .then(()=>console.log("connected successfull to database"))
    .catch((err)=>console.error("Not connected due to :",err))

E_app.listen(PORT,()=>{
    console.log("server is running at port no:",PORT)
})