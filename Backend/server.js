const express = require("express") 

const products = require("./data/products")

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


app.listen(5000,console.log("server running on port"))