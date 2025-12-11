import mongoose from 'mongoose';    

const Cart=new mongoose.Schema({
    itemName:String,
    color:String,
    price:String
})
const cart1=mongoose.model("cart1",Cart);
export default cart1;