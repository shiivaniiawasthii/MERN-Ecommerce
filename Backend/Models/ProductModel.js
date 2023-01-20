import mongoose from "mongoose";
const reviewSchema= mongoose.Schema({
        name:{type:String,require:true},
        rating: {type:Number,require:true},
        Comment:{type:String,require:true},
},{
        timeStamps:true
})
const productSchema= mongoose.Schema({
        user:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"User"
        },
        name:{
                type:String,
                required:true
        },
        image:{
                type:String,
                required:true,
                
        },
        category:{
                type:String,
                required:true,
                
        },
        brand:{
                type:Boolean,
                required:true,
                
        },
        description:{
                type:Boolean,
                required:true,
                
        },
        reviews:[reviewSchema],
        rating:{
                type:Number,
                required:true,
                default:0
                
        },
        numReviews:{
                type:Number,
                required:true,
                default:0
                
        },
        Price:{
                type:Number,
                required:true,
                
        },
        CountInStock:{
                type:Number,
                required:true,
                default:0
                
        }
},
        {
                timeStamps:true
        
})

const Product = mongoose.model("Product",productSchema)

export default Product