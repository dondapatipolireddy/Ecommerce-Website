import express from 'express'
import {Post,Put,Delete,Get,GetOne} from "../Controllers/content.js" 
import user from "../models/user.js"
const router=express.Router()
router.post("/",Post(user))
router.get("/",Get(user))
router.get("/:id",GetOne(user))
router.put("/:id",Put(user))
router.delete("/:id",Delete(user))
export default router;