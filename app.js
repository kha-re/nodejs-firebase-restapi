const express = require("express");
const morgan = require("morgan");
const app = express();

const productRoutes = require("./api/routes/products")
const orderRoutes = require("./api/routes/orders")
const userRoutes = require("./api/routes/users")

app.use(morgan('dev'));

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);

app.use((req, res, next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});


module.exports = app;