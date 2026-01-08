import mongoose from 'mongoose';    
const User=new mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    role:String
})
const user1 = mongoose.model("user1",User); 
export default user1;