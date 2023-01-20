import express from "express";
import dotenv from "dotenv"
import Products from "./data/Products.js"
import {connectDb} from "./Config/db.js"

dotenv.config()

connectDb()

const app = express()
// console.log(Products,6666)

// creating routes

app.get("/",(req,res)=>{
        res.send("API is running")
})

app.get("/api/products",(req,res)=>{
        res.json(products)
})

app.get("/api/products/:id",(req,res)=>{
        // console.log(req,res)
        const product = Products.find((p)=>p._id===req.params.id)
        res.json(product)
})

const PORT = process.env.PORT || 5000



app.listen(PORT,
        console.log(`server running in ${process.env.NODE_ENV} node on port ${PORT}`))