import bcrypt from 'bcrypt';
import Category from "../models/category.js";
import productItemSchema from "../models/product.js"
export const Get=(Model)=>async(req,res)=>{
    try{
        const data=await Model.find();
        res.send({message:"data fetched successfully",data:data})
    }
    catch(error){
        res.status(500).send({message:"Internal server error"})
    }
}
export const GetOne=(Model)=>async(req,res)=>{
    try{
        const data = await Model.findById(req.params.id);
        if (!data){
            res.status(404).send({message:"Enter data Not availble (or) searching invalid data"})
        }
        res.send({message:"data fetched successfully",Data:data})
    }
    catch(error){
        res.status(500).send({message:"Internal server error"})
    }
}
export const Post=(Model)=>async(req,res)=>{
    if(Model.modelName==="Admins"){
        const {AdminName,email,password}=req.body;  
        if (!AdminName || !email || !password){
            return res.status(400).send({message:"requires all fields"})  //when user sends invalid or incorrect data
        }
        // checking any matching between password with other details
        const hashed=await bcrypt.hash(password,10)
        // checking user already exist
        const data=await Model.findOne({email})
        if (data){
            return res.status(409).send({message:"Admin already exist"});    //409: because of conflict request cannto proceed (or) duplicate data  
        }
        // creating new user in database
        try{
            const adminData=new Model({AdminName,email,password:hashed});
            await adminData.save();
            return res.status(201).send({message:"Admin created successfully",Admin:adminData}) //201:a successful new resouce is created
        }
        catch(error){
            return res.status(500).send({message:"internal server error",error:error.message})
        }
    }
    else{
    try{
        const data=new Model(req.body);
        await data.save();
        res.status(201).send({message:"data inserted successfully",Data:data});
    }
    catch(error){
        res.status(500).send({message:"Internal server error"});
    }
}
    
}
export const Put=(Model)=>async(req,res)=>{
    try{
        const data=await Model.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!data)res.status(404).send({message:"data invalid"})
        res.send({message:"data updated sucessfully",data:data})
    }
    catch(error){
        res.status(500).send({message:"Interval server error"})
    }
}
export const Delete=(Model)=>async(req,res)=>{
    try{
        const data=await Model.findByIdAndDelete(req.params.id)
        if(!data) res.status(404).send({message:"data invalid"})
        res.send({message:"data deleted successfully",Data:data})
    }
    catch(error){
        res.status(500).send({message:"Ïnternal server error"})
    }
}

export const get = async (req, res) => {
  try {
    console.log("Params:", req.params);

    const category = req.params.categoryName;

    const cat = await Category.findOne({ type_product: category });

    if (!cat) {
      return res.status(404).json({ message: "Category not found" });
    }

    const data = await productItemSchema.find({ category: cat._id });

    res.status(200).json(data);
  } catch (error) {
    console.error("🔥 ERROR 👉", error);
    res.status(500).json({ error: error.message });
  }
};



    

