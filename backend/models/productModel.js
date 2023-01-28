const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please Enter Product Name"],

    },
    description:{
        type: String,
        required:[true,"Please Enter Product description"]
    },
    price:{
        type:Number,
        required:[true,"Please eneter product price"],
        maxLength:[8,"Price cannot exceed 8 character"]
    },
    rating:{
        type:Number,
        default:0
    },
    Images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please enter product category"],
    },
    Stock:{
        type:Number,
        maxLength:[5,"Stock lemgth cannot exceed 5 char"],
        default:1,
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    Reviews: [
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true,
    },
    created:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product",productSchema);
