import express from "express"
import { protect } from "../middleware/authMiddleware.js"
const router = express.Router()
import { authUser, getUserProfile } from "../controller/userController.js"




router.post("/login",authUser)
router.route("/profile").get(protect,getUserProfile)
export default router