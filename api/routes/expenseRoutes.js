const router = require("express").Router();
const Expense  = require("../models/Expense");

router.get("/",(req, res, next)=>{
    
    Expense.all().then((response)=>{
      res.status(response.status).json({
          error: response.error,
          expenses: response.data
      })
    });
});

router.post("/",(req, res, next)=>{

    var data = {
      user_id: req.body.user_id,
      items: req.body.items,
      price: req.body.price,
      date: req.body.date,
    }
    
    var response = Expense.create(data);
    
    res.status(response.status).json({
        error:response.error,
        id:response.data.id
    })
});

router.get("/:id",(req, res, next)=>{
    var id = req.params.id;
    Expense.getOne(id).then((response)=>{
      res.status(response.status).json({
          error: response.error,
          expense: response.data
      })
    });
});

router.delete("/:id",(req, res, next)=>{
    var id = req.params.id;
    Expense.remove(id).then((response)=>{
      res.status(response.status).json({
          error: response.error,
          expense: response.data
      })
    });
});

router.patch("/:id",(req, res, next)=>{
    var id = req.params.id;
    var data = {
      items: req.body.items,
      price: req.body.price,
      date: req.body.date,
    }
    
    Expense.update(id,data).then((response)=>{
      res.status(response.status).json({
          error: response.error,
          expense: response.data
      })
    });
});


module.exports = router;