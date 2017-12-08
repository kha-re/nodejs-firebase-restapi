function makeResponse(status=200,data=null,message=null,alertMessage=null){
    var error = (message!=null) ? { status, message } : null;
    return {
        status:status,
        error,
        alertMessage,
        data:data
    }
}

module.exports.makeResponse = makeResponse;