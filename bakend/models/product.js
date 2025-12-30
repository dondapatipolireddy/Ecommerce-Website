import mongoose from 'mongoose'
const productItem=new mongoose.Schema({
    itemName:{type:String,required:true},
    image:String,
    color:String,
    price:{type:Number,required:true},
    Description:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:"Category",required:true}
})
const productItemSchema=mongoose.model("productItemSchema",productItem)

export default productItemSchema;