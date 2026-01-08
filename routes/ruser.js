import express from 'express'
import {Post,Put,Delete,Get,GetOne} from "../Controllers/content.js" 
import user from "../models/user.js"
const ruser=express.Router()
ruser.post("/",Post(user))
ruser.get("/",Get(user))
ruser.get("/:id",GetOne(user))
ruser.put("/:id",Put(user))
ruser.delete("/:id",Delete(user))
export default ruser;