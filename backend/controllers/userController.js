const User = require('../models/userModel');
const ErrorHander = require('../utils/errorhander');
const catchAsyncError = require('../middleware/catchAsyncError');
const sendToken = require('../utils/jwtToken');

exports.registerUser = catchAsyncError( async (req,res,next) => {

    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilePicURL"
        },
    });

    sendToken(user, 200,res);

})

exports.loginUser = catchAsyncError( async (req,res,next) => {


    const {email , password} = req.body;

    if(!email || !password){
        return next(new ErrorHander("Please Enter username and password",400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("Invalid email or password",401));
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid email or password",401));
    }

    // const token = user.getJWTToken();

    // res.status(200).json({
    //     success: true,
    //     token,
    // })
    sendToken(user, 200 , res);
})