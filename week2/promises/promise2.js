// promise creation
function temp(resolve){
    setTimeout(resolve, 9000)
}

const p = new Promise(temp);


// using promises

function callBack(){
    console.log("Promises resolved !");
}


p.then(callBack)