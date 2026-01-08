import express from 'express'
import {AdminOnly} from '../services/authentication.js'
import {Post,Put,Delete,Get,GetOne,get} from "../Controllers/content.js"
import productItemSchema from "../models/product.js"
import Category from "../models/category.js"
const rCategory=express.Router()
const rproductitemsSchema=express.Router()
rCategory
    .post("/",AdminOnly,Post(Category))
    .get("/:id",GetOne(Category))
    .get("/",Get(Category))
    .put("/:id",AdminOnly,Put(Category))
    .delete("/:id",AdminOnly,Delete(Category))
rproductitemsSchema
    .post("/",AdminOnly,Post(productItemSchema))
    .get("/",Get(productItemSchema))
    .get("/:categoryName",get)
    .get("/:id",GetOne(productItemSchema))
    .put("/:id",AdminOnly,Put(productItemSchema))
    .delete("/:id",AdminOnly,Delete(productItemSchema))
export {rCategory,rproductitemsSchema};
