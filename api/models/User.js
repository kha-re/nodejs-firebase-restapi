const Model = require("../firebase").Users;
const utils = require("../helpers/utils")

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
    return Model.child(id).once('value').then((snapshot) =>{
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

function remove(id) {
    return Model.child(id).once('value').then((snapshot) =>{
        const data = snapshot.val()
        if(data){
            Model.child(id).remove()
            return utils.makeResponse(200,null)
        } else {
            return utils.makeResponse(404,null,"Not Found")
        }
      }).catch(function(error) {
        return utils.makeResponse(500, null, error.message)
      });
}

function update(id, data) {
    return Model.child(id).once('value').then((snapshot) =>{
        if(snapshot.val()){
            Model.child(id).update(data);
            return utils.makeResponse(200,null)
        } else {
            return utils.makeResponse(404,null,"Not Found")
        }
      }).catch(function(error) {
        return utils.makeResponse(500, null, error.message)
      });
}

function create(data) {
    // Get a keys.
    var modelKey = Model.push().key;
    Model.child(modelKey).set(data);
    return utils.makeResponse(201,{id:modelKey},null,"Resource created.")
}


module.exports =  {
    all,
    getOne,
    create,
    remove,
    update
}
