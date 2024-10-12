const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.json({
        "Message":"Home Page"
    })
})

app.listen(3000,()=>{
    console.log("Server Is Running At 3000");
})