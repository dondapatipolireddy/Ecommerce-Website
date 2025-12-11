import mongoose from 'mongoose';    
const User=new mongoose.Schema({
    Name:String,
    email:String,
    password:String
})
export default User;