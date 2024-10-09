const express = require("express");
const app = express();


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get("/name",(req,res)=>{
    res.json({
        name:"Gyanranjan"
    })
});

app.listen(3000,()=>{
    console.log("Server Is Successfully Running");
})