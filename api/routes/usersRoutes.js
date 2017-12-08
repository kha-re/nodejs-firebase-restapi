const router = require("express").Router();
const User  = require("../models/users");

router.get("/",(req, res, next)=>{
    
    User.all().then((response)=>{
      res.status(response.status).json({
          error: response.error,
          users: response.data
      })
    });
});

router.get("/:userId",(req, res, next)=>{
    var id = req.params.userId;
    User.getOne(id).then((response)=>{
      res.status(response.status).json({
          error: response.error,
          user: response.data
      })
    });
});

// router.get("/:userKey",(req, res, next)=>{
//     var ukey = req.params.userKey;

//     var userRef = Users.child(ukey);

//       userRef.once('value').then(function(snapshot) {
//         var user = snapshot.val();
//         if(user){
//             writeUserData(ukey, user.email.split("@")[0].toUpperCase(), user.email, "some-url-again");
//         }
//         res.status(200).json({
//             user:user
//         });
        
//       }).catch((error)=> {
        
//         res.status(500).json({
//             error:error
//         });
        
//       });

    
// });


module.exports = router;