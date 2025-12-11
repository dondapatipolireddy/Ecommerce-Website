export const Get=(Model)=>async(req,res)=>{
    try{
        const data=await Model.find();
        res.send({message:"data fetched successfully",Data:data})
    }
    catch(error){
        res.status(500).send({message:"Internal server error"})
    }
}
export const GetOne=(Model)=>async(req,res)=>{
    try{
        const data = await Model.findById();
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
    try{
        const data=new Model(req.data);
        await Model.save(data);
        res.status(404).send({message:"data inserted successfully",Data:data});
    }
    catch(error){
        res.send({message:"Internal server error",Data:data});
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