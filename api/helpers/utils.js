function makeResponse(status=200,data=null,message=null){
    var error = (message!=null) ? { status, message } : null;
    return {
        status:status,
        data:data,
        error
    }
}

module.exports.makeResponse = makeResponse;