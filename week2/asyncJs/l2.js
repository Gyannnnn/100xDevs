const fs = require('fs');

function print(err,data){
    console.log(data);
}

fs.readFile("a.txt","utf-8",print);
fs.readFile("b.txt","utf-8",print);

setTimeout(()=>{
    console.log("Hello");
},1000);

console.log("Done");