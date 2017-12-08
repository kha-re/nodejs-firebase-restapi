const Model = require("../../firebase").Users;
const utils = require("../../helpers/utils")

function all() {
    
    return Model.once('value').then(function(snapshot) {
        const data = snapshot.val()
        if(data){
            return utils.makeResponse(200,data)
        } else {
            return utils.makeResponse(404,null,"Not Found")
        }
      }).catch(function(error) {
        return utils.makeResponse(500,null,error.message)
      });
}

function getOne(id) {
    return Model.child(id).once('value').then(function(snapshot) {
        const data = snapshot.val()
        if(data){
            return utils.makeResponse(200,data)
        } else {
            return utils.makeResponse(404,null,"Not Found")
        }
      }).catch(function(error) {
        return utils.makeResponse(500, null, error.message)
      });
}

// function create(name, email) {
//     var user = Users.push();
//     Users.child(user.key).set({
//         username: name,
//         email: email,
//     });
// }

// function setData(userId, name, email) {
//   Users.child(userId).set({
//     username: name,
//     email: email
//   });
// }

module.exports =  {
    all,
    getOne
}
