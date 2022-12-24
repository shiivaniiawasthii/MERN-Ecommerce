const express = require("express") 
const dotenv = require("dotenv")
const products = require("./data/products")

dotenv.config()

const app = express()
console.log(products,6666)

// creating routes

app.get("/",(req,res)=>{
        res.send("API is running")
})

app.get("/api/products",(req,res)=>{
        res.json(products)
})

app.get("/api/products/:id",(req,res)=>{
        // console.log(req,res)
        const product = products.find((p)=>p._id===req.params.id)
        res.json(product)
})

const PORT = process.env.PORT || 5000


app.listen(PORT,
        console.log(`server running in ${process.env.NODE_ENV} node on port ${PORT}`))