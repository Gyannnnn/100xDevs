const express = require('express');
const app = express();
const mongoose = require('mongoose');

const {UserModel , TodoModel} = require("./db")


app.use(express.json());




app.post("/signup",async(req,res)=>{

    const {email, password, name} = req.body
    await UserModel.create({
        email,
        password,
        name
    })
    res.json({
        message:"Successfully signedUp"
    })

});

app.post("/signin",(req,res)=>{
    const {email , password } = req.body;
    const user = UserModel.findOne({
        email,
        password
    })
    console.log(user);
    if(user){
        const token = 
        res.json({


        })
    }else{
        res.status(403).json({
            message:"Incorrect Credential"
        })
    }


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