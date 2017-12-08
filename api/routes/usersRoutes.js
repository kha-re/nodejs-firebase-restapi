const router = require("express").Router();
const User  = require("../models/User");

router.get("/",(req, res, next)=>{
    
    User.all().then((response)=>{
      res.status(response.status).json({
          error: response.error,
          users: response.data
      })
    });
});

router.post("/",(req, res, next)=>{

    var data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    
    var response = User.create(data);
    
    res.status(response.status).json({
        error:response.error,
        id:response.data.id
    })
});


router.get("/:id",(req, res, next)=>{
    var id = req.params.id;
    User.getOne(id).then((response)=>{
      res.status(response.status).json({
          error: response.error,
          user: response.data
      })
    });
});

router.delete("/:id",(req, res, next)=>{
    var id = req.params.id;
    User.remove(id).then((response)=>{
      res.status(response.status).json({
          error: response.error,
          user: response.data
      })
    });
});

router.patch("/:id",(req, res, next)=>{
    var id = req.params.id;
    var data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender
    }
    
    User.update(id,data).then((response)=>{
      res.status(response.status).json({
          error: response.error,
          user: response.data
      })
    });
});


module.exports = router;