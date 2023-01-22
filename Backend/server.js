import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import {connectDb} from "./Config/db.js"
import productRoutes from "./Routes/productRouter.js";
import userRoutes from "./Routes/userRouter.js";
dotenv.config()

connectDb()

const app = express()
// console.log(Products,6666)
// middleware
app.use(cors())
app.use(express.json())
// creating routes



app.get("/",(req,res)=>{
        res.send("API is running")
})

app.use("/api/products",productRoutes);
app.use("/api/users",userRoutes)

app.get("/api/products",(req,res)=>{
        res.json(products)
})



const PORT = process.env.PORT || 5000





app.listen(PORT,
        console.log(`server running in ${process.env.NODE_ENV} node on port ${PORT}`))

