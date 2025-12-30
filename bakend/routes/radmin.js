import express from 'express'
import Admins from '../models/admin.js'
import {Post,Put,Delete,Get,GetOne} from "../Controllers/content.js"
const rAdmin=express.Router()
rAdmin   
    .post("/",Post(Admins))
    .get("/:id",GetOne(Admins))
    .get("/",Get(Admins))     
    .put("/:id",Put(Admins))
    .delete("/:id",Delete(Admins))
export default rAdmin;
