import mongoose from 'mongoose'
const Admin=new mongoose.Schema({
    AdminName:String,
    email:String,
    password:String,
    role:{type:String,default:"admin"}
})
const Admins=mongoose.model("Admins",Admin);
export default Admins;