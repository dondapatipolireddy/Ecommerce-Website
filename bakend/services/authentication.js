import jwt from 'jsonwebtoken'
import user1 from '../models/user.js'    //castError : when mismatch occured due to invalid query or datatype mismatch
import SECRET_KEY from '../env'
import Admins from '../models/admin.js'
import bcrypt from 'bcrypt'
export const Register=async(req,res)=>{
    const {userName,email,password,role}=req.body;
    if (!userName|| !email || !password || !role){
        res.status(400).send({message:"requires all fields"})  //when user sends invalid or incorrect data
    }
    // checking any matching between password with other details
    const hashed=await bcrypt.hash(password,10)
    // checking user already exist
    const data=await user1.findOne({email})
    if (data){
        res.status(409).send({message:"User already exist"});    //409: because of conflict request cannto proceed (or) duplicate data  
    }
    // creating new user in database
    try{
        const userData=new user1({userName,email,password:hashed,role});
        await userData.save();
        res.status(201).send({message:"user created successfully",User:userData}) //201:a successful new resouce is created
    }
    catch(error){
        res.status(500).send({message:"internal server error",error:error.message})
    }
}
export const Login=async(req,res)=>{
  const {role}=req.body;
  if (role==="admin"){
    const {email,password}=req.body;
    if (!email || !password){
        return res.status(400).send({message:"require all fields"})
    }
    const user=await Admins.findOne({email})
    if (!user){
        return res.status(404).send({message:"User not exist invalid details please login again"})
    }
    const isMatch=await bcrypt.compare(password,user.password)  //isMatch place don't use id because id is unique for every user (when use id shows error and id it shows always false)
    if(!isMatch){
        return res.status(401).send({message:"user not found (or) email (or) password is incorrect"})
    }
    const token=jwt.sign({id:user._id,email:user.email,role:"admin"},SECRET_KEY,{expiresIn:"1h"})
    return res.status(200).send({message:"Login successful",token})
  }
  else{
try{
    const {email,password}=req.body;
    if (!email || !password){
        return res.status(400).send({message:"require all fields"})
    }
    const user=await user1.findOne({email})
    if (!user){
        return res.status(404).send({message:"User not exist"})
    }
    const isMatch=await bcrypt.compare(password,user.password)  //isMatch place don't use id because id is unique for every user (when use id shows error and id it shows always false)
    if(!isMatch){
        return res.status(401).send({message:"user not found (or) email (or) password is incorrect"})
    }
    const token=jwt.sign({id:user._id,email:user.email,role:"user"},SECRET_KEY,{expiresIn:"1h"})
    return res.status(200).send({message:"Login successful",token})
}
catch(error){
    return res.status(500).send({message:"Internal server eroor",error:error.message})
}
}
}

export const Authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Auth Header:", authHeader);
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user info to request
    console.log("Decoded Token:", decoded);
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token", error });
  }
};

export const AdminOnly=async(req,res,next)=>{
  if (req.user.role!="admin"){
    return res.status(403).send({message:"Access is denied (admins only having access)"})
  }
  next();
}