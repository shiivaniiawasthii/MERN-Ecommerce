
import dotenv from "dotenv"
import users from "./data/users.js";
import products from "./data/Product.js";
import User from "./Models/UserModel.js";
import Product from "./Models/ProductModel.js";
import Order from "./Models/OrderModel.js";
import { connectDb } from "./Config/db.js";

dotenv.config()

connectDb()

const importData =async()=>{
        try{
                await Order.deleteMany()
                await Product.deleteMany()
                await User.deleteMany()
                const createdUsers = await User.insertMany(users)
                const adminUser = createdUsers[0]._id
                const sampleProducts =  products.map(product=>{
                        return {...product, user:adminUser}
                })

                await Product.insertMany(sampleProducts)
                console.log(`Data imported`)
                process.exit()

        }catch(err){
                console.log(err)
                process.exit(1)

        }
}

const destroytData =async()=>{
        try{
                await Order.deleteMany()
                await Product.deleteMany()
                await User.deleteMany()
               
                console.log(`Data destroyed`)
                process.exit()

        }catch(err){
                console.log(err)
                process.exit(1)

        }

}


if(process.argv[2]==="-d")destroytData()
else importData()











