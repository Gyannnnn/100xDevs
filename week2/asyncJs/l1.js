function sum(a,b){
    return a+b;
}

let ans = sum(12,23);
console.log("The Sum Is : ",ans);

function nsum(n){
    return n*(n+1);
}

let n_sum = nsum(50000);
console.log(n_sum);

const fs = require("fs")
const contents = fs.readFileSync("a.txt","utf-8");
console.log(contents);
