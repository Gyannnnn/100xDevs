const express = require("express");
const app = express();
const port =  3000

app.get("/",(req,res)=>{
    res.json({
        "Message":"Welcome"
    })
})

app.get("/sum",(req,res)=>{
    const a  = parseInt(req.query.a);
    const b =  Number(req.query.b); // Number() -> converts string to integer
    res.json({
        "sum Is :":a+b
    })
})
app.get("/dif/:a/:b",(req,res)=>{
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({
        "Diffrence Is :":a-b
    })
})

app.get("/multyply",(req,res)=>{
    const a  = req.query.a;
    const b =  req.query.b;
    res.json({
        "multyply Is :":a*b
    })
});

app.get("/multyply",(req,res)=>{
    const a  = req.query.a;
    const b =  req.query.b;
    res.json({
        "multyply Is :":a*b
    })
})
app.get("/multyply",(req,res)=>{
    const a  = req.query.a;
    const b =  req.query.b;
    res.json({
        "multyply Is :":a*b
    })
})

app.get("/multyply",(req,res)=>{
    const a  = req.query.a;
    const b =  req.query.b;
    res.json({
        "multyply Is :":a*b
    })
})

app.get("/div",(req,res)=>{
    const a  = req.query.a;
    const b =  req.query.b;
    res.json({
        "Division Is :":a/b
    })
})




app.listen(port,()=>{
    console.log(`Server Is Running At ${port}`);
})