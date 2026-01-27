import express from 'express'
import {Post,Put,Delete,CartGet,GetOne} from "../Controllers/content.js" 
import Order from "../models/order.js"
const rOrder=express.Router()
rOrder.post("/",Post(Order))
rOrder.get("/",CartGet(Order))
rOrder.get("/:id",GetOne(Order))
rOrder.put("/:id",Put(Order))
rOrder.delete("/:id",Delete(Order))
export default rOrder;