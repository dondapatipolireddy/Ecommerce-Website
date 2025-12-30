import mongoose from 'mongoose'
const productsSchema=new mongoose.Schema({
    type_product:{type:String,required:true}
})
const Category=mongoose.model("Category",productsSchema);
export default Category;