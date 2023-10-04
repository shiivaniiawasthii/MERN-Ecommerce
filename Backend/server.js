import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import {connectDb} from "./Config/db.js"
import productRoutes from "./Routes/productRouter.js";
import userRoutes from "./Routes/userRouter.js";
import path from "path";
dotenv.config()

connectDb()

const app = express()
// console.log(Products,6666)
// middleware
app.use(cors())
app.use(express.json())
// creating routes
const PORT = process.env.PORT || 5000




app.use("/api/products",productRoutes);
app.use("/api/users",userRoutes)

app.get("/api/products",(req,res)=>{
        res.json(products)
})
const _dirname = path.resolve()
if(process.env.NODE_ENV =="production"){
        app.use(express.static(path.join(_dirname,'/frotend/build')))
        app.get("*",(req,res)=>res.sendFile(path.resolve(_dirname,'frotend','build','index.html')))
}else{
        app.get("/",(req,res)=>{
                res.send("API is running")
        })}










app.listen(PORT,
        console.log(`server running in ${process.env.NODE_ENV} node on port ${PORT}`))

