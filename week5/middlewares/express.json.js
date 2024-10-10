const express = require('express');
const app = express();

app.post("/sum",(req,res)=>{
    const a = Number(req.body.a)
    const b = Number(req.body.b)
    res.json({
        "Sum Is :":a+b
    })
})

app.listen(3000,()=>{
    console.log("Server Is Running At 3000")
})