const refs = require("../../firebase/refs")
const Model  = refs.Users;

function all() {
    
    return Model.once('value').then(function(snapshot) {
        return {
            status: 200,
            data: snapshot.val()
        }
      }).catch(function(error) {
        console.log('error',error);
        return {
            status: 200,
            error: { message:error.message },
        }
      });
}

function getOne(id) {
    return Model.child(id).once('value').then(function(snapshot) {
        return {
            status: 200,
            data: snapshot.val()
        }
      }).catch(function(error) {
        console.log('error',error);
        return {
            status: 200,
            error: { message:error.message },
        }
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

module.exports.all = all;
module.exports.getOne = getOne;
