import mongoose from "mongoose";
const Order1=new mongoose.Schema({
    itemName:{type:String,required:true},
        image:String,
        color:String,
        price:{type:Number,required:true},
        Description:String,
        User:{type:mongoose.Schema.Types.ObjectId,ref:"user1",required:true}
})
const Order=mongoose.model("Order",Order1);
export default Order;