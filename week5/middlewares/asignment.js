const express = require("express");
const app = express();


function middleware(req,res,next){
    console.log("Method Is :"+req.method);
    console.log("Url Is :",req.url);
    console.log("Time IS"+new Date());
    console.log("Host Name Is "+ req.hostname)
}



app.get("/get",middleware);
app.post("/post",middleware);
app.put("/put",middleware);

app.listen(3000,()=>{
    console.log("Server Is  Running At 3000")
})