function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration)
    });
}

function callBack(){
    console.log("1 Seconds Has Pased");
}

setTimeoutPromisified(3000).then(callBack);