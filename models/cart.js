import mongoose from 'mongoose';    

const Cart=new mongoose.Schema({
    itemName:{type:String,required:true},
    image:String,
    color:String,
    price:{type:Number,required:true},
    Description:String
})
const cart1=mongoose.model("cart1",Cart);
export default cart1;