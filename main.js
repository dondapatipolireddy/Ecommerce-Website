import express from 'express'
import mongoose from 'mongoose'
import {PORT,url} from "./env"
import {Login,Register,Authenticate} from "./services/authentication.js"
import rcart from "./routes/rcart.js"
import ruser from "./routes/ruser.js"
import rAdmin from "./routes/radmin.js"
import {rCategory,rproductitemsSchema,rProduct} from "./routes/rproduct.js"
import rOrder from "./routes/rorder.js"
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose
    .connect(url)
    .then(()=>console.log("connected to mongoose"))
    .catch((err)=>console.error("could not connect to MongoDB",err));
//authentication purpose
app.post("/api/Login",Login)
app.post("/api/Register",Register)
//handling data
app.use("/api/Admin",rAdmin);
app.use("/api/Addproduct",rProduct);
app.use("/api/products",rproductitemsSchema);
app.use("/api/Category",rCategory);
app.use("/api/Cart",Authenticate,rcart);
app.use("/api/Order",Authenticate,rOrder);
//payment integration

app.listen(PORT,()=>{
    console.log("server running at port no:",PORT);
})