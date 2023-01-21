import express from "express"
// import asyncHandler from "express-async-handler"
const router = express.Router()
import { getProducts, getProductsById } from "../controller/productController.js"
// import Product from "../Models/ProductModel.js"



// router.get("/",asyncHandler(async(req,res)=>{
//         const products = await Product.find({})
//         res.json(products)
// }))
router.route('/').get(getProducts)



// router.get("/:id",asyncHandler(async(req,res)=>{
       
//         const productId = await Product.findById(req.params.id)
//         console.log("st",productId)

//        if(productId===undefined||productId===null){
//                 console.log("errorrrrrrrrrr")
//                 // res.json({message:"Product not found.."})
        
//         }
        
//          else{
//                 console.log("hi")
//                 res.json(productId)
                
//         }
       
         
        
// }))

router.route("/:id").get(getProductsById)

export default router