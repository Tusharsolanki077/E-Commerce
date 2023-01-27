// const { remove } = require('../models/productModel');
const Product = require('../models/productModel');
const ErrorHander = require('../utils/errorhander');
const catchAsyncError = require('../middleware/catchAsyncError');
const APIFeatures = require('../utils/apiFeatures')


// create product --admin
exports.createProduct = catchAsyncError(async (req,res,next)=> {
  
    
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    })
    
});



// get all products
exports.getAllproducts = catchAsyncError(async (req,res)=>{

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
    const apiFeature = new APIFeatures(Product.find(),req.query)
        .search()
        .filter().pagination(resultPerPage);
    const products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products,
    })

    
});

// update product --admin

exports.updateProduct = catchAsyncError( async (req,res,next) =>{

    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHander("product not found",404));
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
});

// Get Product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {

    const product = await Product.findById(req.params.id);
  
     if(!product) {
        return next(new ErrorHander("product not found",404));
    }
  
    res.status(200).json({
      success: true,
      product,
      productCount,
    });
  });

// delete Product  -admin

exports.deleteProduct = catchAsyncError(async (req,res,next) =>{

    const product = await Product.findById(req.params.id);

    // if(!product) {
    //     return res.status(500).json({
    //         success: false,
    //         message: "Product not found"
    //     })
    // }

    if(!product) {
        return next(new ErrorHander("product not found",404));
    }

    await product.remove();

    res.status(200).json({
         success:true,
        message: "product deleted successfully"
    })
});