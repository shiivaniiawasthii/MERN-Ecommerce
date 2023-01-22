
import asyncHandler from "express-async-handler"
import { generateToken } from "../utils/generateToken.js"
import User from "../Models/UserModel.js"

const authUser =asyncHandler(async(req,res)=>{
     const {email,password} = req.body

     const user = await User.findOne({email})
     if(user &&(await user.matchPassword(password))){
     res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user._id)
     })
     
     }
     else{
        res.status(404)
        throw new Error("Invalid Credentials")
        
     }

     res.send({email,password})

})


const getUserProfile =asyncHandler(async(req,res)=>{
   const user = await User.findById(req.user._id)

   
   if(user){
   res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
      token:generateToken(user._id)
   })
   
   }
   else{
      res.status(404)
      throw new Error("Invalid Credentials")
      
   }

   // res.send({email,password})

})

export {authUser,getUserProfile}