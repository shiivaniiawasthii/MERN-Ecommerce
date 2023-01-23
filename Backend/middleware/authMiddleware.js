import jwt from "jsonwebtoken"
import User from "../Models/UserModel.js"
import asyncHandler from "express-async-handler"
export const protect = asyncHandler(async(req,res,next)=>{
        let token

        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
   
         try{
                        token = req.headers.authorization.split(' ')[1]
// console.log(process.env.JWT_CODE,1111111111111111111111111)
                      const decoded = jwt.verify(token,process.env.JWT_CODE)
console.log(decoded.id,22222222222222222222222222)
                      req.user = await User.findById(decoded.id).select('-password')
                //       console.log(decoded)
                      next()

                }catch(err){

                        console.log(err)
                        res.status(401)
                        throw new Error('Not authorized, token failed')

                }
        }
        if(!token){
               res.status(401)
               throw new Error("Not authorized, no token")
        }
       

}
)

