// setTimeout(function(){
//     console.log("HI")
//     setTimeout(function(){
//         console.log("Hello")
//         setTimeout(function(){
//             console.log("Hello There ")
//         },5000)
//     },3000)
// },1000)


function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration)
    })
}


// call back hell
// setTimeoutPromisified(1000).then(()=>{
//     console.log("Hi");
//     setTimeoutPromisified(3000).then(()=>{
//         console.log("Hello");

//         setTimeoutPromisified(5000).then(()=>{
//             console.log("Hello There")
//         })
//     })

// })


// setTimeoutPromisified(1000).then(()=>{
//     console.log("hi");
//     return setTimeoutPromisified(3000)
// }).then(()=>{
//     console.log("Hello")
//     return setTimeoutPromisified(5000)
// }).then(()=>{
//     console.log("Hello There");
// })

 // these are syntatic sugars !
async function solve(){
    await setTimeoutPromisified(1000)
    console.log("HI")
    await setTimeoutPromisified(3000)
    console.log("Hello")
    await setTimeoutPromisified(5000)
    console.log("Hello There");
}

// these are asynchronous code so it will moved to the stack

solve();