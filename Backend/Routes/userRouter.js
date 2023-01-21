import express from "express"

const router = express.Router()
import { getProducts, getProductsById } from "../controller/productController.js"





router.route('/').get(getProducts)





router.route("/:id").get(getProductsById)

export default router