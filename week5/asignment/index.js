const express = require("express");
const app = express();
const port =  4000

app.get("/",(req,res)=>{
    res.json({
        "message":"Hi"
    })
});


app.listen(port,()=>{
    console.log(`Server Is Running At ${port}`);
})