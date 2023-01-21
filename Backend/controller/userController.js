
import asyncHandler from "express-async-handler"

import User from "../Models/UserModel.js"

const getProducts =asyncHandler(async(req,res)=>{
     const {email,password} = req.body

     res.send(email,password)

})

export {authUser}