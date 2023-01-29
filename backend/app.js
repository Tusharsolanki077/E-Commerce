const express = require('express')
const app = express();
const cookiePaser = require('cookie-parser');

const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use(cookiePaser());

// route import

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);

// middleware for error
app.use(errorMiddleware);

module.exports = app