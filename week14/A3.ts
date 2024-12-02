function delayed(fn:()=>void){
    setInterval(fn,1000);
}

delayed(function(){
    console.log("Hi")
})