const express = require("express");
const router = express.Router();

router.get("/",(req, res, next)=>{
    res.status(200).json({
        message:"Get Orders Page"
    });
});

router.post("/",(req, res, next)=>{
    res.status(201).json({
        message:"Post Orders Page"
    });
});

router.get("/:orderId",(req, res, next)=>{
    const id = req.params.orderId;
    res.status(200).json({
        message:"get order id " + id
    });
});

router.patch("/:orderId",(req, res, next)=>{
    const id = req.params.orderId;
    res.status(200).json({
        message:"patch order id " + id
    });
});

router.delete("/:orderId",(req, res, next)=>{
    const id = req.params.orderId;
    res.status(200).json({
        message:"delete order id " + id
    });
});


module.exports = router;