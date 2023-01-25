const Product = require('../models/productModel');



// create product --admin
exports.createProduct = async (req,res,next)=> {
  
    try{
        const product = Product.create(req.body);
        res.status(201).json({
            success: true,
            Product
        })
    }catch(err){
        next(err);
    }
}



// get all products
exports.getAllproducts = async (req,res)=>{

    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })

    
}

// update product --admin
