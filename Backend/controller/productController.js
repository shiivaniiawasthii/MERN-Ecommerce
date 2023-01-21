
import asyncHandler from "express-async-handler"

import Product from "../Models/ProductModel.js"

const getProducts =asyncHandler(async(req,res)=>{
        const products = await Product.find({})
        res.json(products)

})

const getProductsById =asyncHandler(async(req,res)=>{
        const productId = await Product.findById(req.params.id)
        console.log("st",productId)

       if(productId===undefined||productId===null){
                console.log("errorrrrrrrrrr")
                // res.json({message:"Product not found.."})
        
        }
        
         else{
                console.log("hi")
                res.json(productId)
                
        }

})

export {
        getProducts,
        getProductsById
}


