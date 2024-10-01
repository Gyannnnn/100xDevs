// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function callback() {
//   console.log("3 Seconds Done !");
// }

// setTimeoutPromisified(3000).then(callback);


// function promiseCallback(resolve){
//     setTimeout(resolve,3000)

// }

// promiseCallback(function(){
//     console.log("hi");
// })




// setTimeout(()=>{
//     console.log("Hi Nextb time");
// },3000)




// function setTimefor3s(resolve){
//     setTimeout(resolve,3000)
// }

// function main(){
//     console.log("Main Is Called");
// }

// setTimefor3s(main)




function random(resolve){
    setTimeout(resolve,3000);
    
}
let p = new Promise(random);

function callBack(){
    console.log("Promises Completed !");
}



p.then(callBack)