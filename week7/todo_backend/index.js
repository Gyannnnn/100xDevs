const express = require('express');
const app = express();
const mongoose = require('mongoose');

const {UserModel,TodoModel} = require("./db")


app.use(express.json());




app.post("/signup",(req,res)=>{

});

app.post("/signin",(req,res)=>{


});
app.get("/todo",(req,res)=>{


});

app.get("/todos",(req,res)=>{

    res.json({
        message:"Your Todos Will Appear here"
    })

});

app.listen(3000,function(){
    console.log("Server Is Running At http://localhost:3000");
})