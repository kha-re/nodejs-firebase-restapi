const express = require("express");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('dev'));

const userRoutes = require("./api/routes/userRoutes")
const expenseRoutes = require("./api/routes/expenseRoutes")

app.use("/users", userRoutes);
app.use("/expenses", expenseRoutes);

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