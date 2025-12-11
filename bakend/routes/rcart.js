import express from 'express'
import {Post,Put,Delete,Get,GetOne} from "../Controllers/content.js" 
import cart from "../models/cart.js"
const router=express.Router()
router.post("/",Post(cart))
router.get("/",Get(cart))
router.get("/:id",GetOne(cart))
router.put("/:id",Put(cart))
router.delete("/:id",Delete(cart))
export default router;