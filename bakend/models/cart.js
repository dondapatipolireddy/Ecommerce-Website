import mongoose from 'mongoose';    

const Cart=new mongoose.Schema({
    itemName:String,
    color:String,
    price:String
})
export default Cart;