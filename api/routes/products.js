const express = require("express");
const router = express.Router();

router.get("/",(req, res, next)=>{
    res.status(200).json({
        message:"Get Products Page"
    });
});

router.post("/",(req, res, next)=>{
    res.status(201).json({
        message:"Post Products Page"
    });
});

router.get("/:productId",(req, res, next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message:"get Product id " + id
    });
});

router.patch("/:productId",(req, res, next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message:"patch Product id " + id
    });
});

router.delete("/:productId",(req, res, next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message:"delete Product id " + id
    });
});


module.exports = router;