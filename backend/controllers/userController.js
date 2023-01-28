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

    sendToken(user, 201,res);

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

    const isPasswordMatched = await user.comparePassword(password);

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

// logout User
exports.logout = catchAsyncError(async(req,res,next) => {


    res.cookie("token",null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
});

// forgetPassword
exports.forgotPassword = catchAsyncError(async(req,res,next) => {

    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHander("User not found",404))
    }

    // get resetPassword token
    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
    )}/api/vi/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then please ignore it`;

    try{

        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });

    }catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHander(error.message, 500));
    }

});