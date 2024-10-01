// create  a promisified version of clean file !

const fs = require("fs");
const filePath = "./a.txt";

function clean(resolve , reject) {
  fs.truncate(filePath, 0, (err) => {
    if (err) {
      reject(err)
    } else {
      resolve();
    }
  });
}

let p = new Promise(clean);

function callBack() {
  console.log(`File contents truncated to zero`);
}

p.then(()=>{
    console.log("Successfully Cleaned");
}).catch((err)=>{
    console.log("Error Ocured :", err);

})