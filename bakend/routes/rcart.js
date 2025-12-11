import express from 'express'
import {Post,Put,Delete,Get,GetOne} from "../Controllers/content.js" 
import cart from "../models/cart.js"
const rcart=express.Router()
rcart.post("/",Post(cart))
rcart.get("/",Get(cart))
rcart.get("/:id",GetOne(cart))
rcart.put("/:id",Put(cart))
rcart.delete("/:id",Delete(cart))
export default rcart;