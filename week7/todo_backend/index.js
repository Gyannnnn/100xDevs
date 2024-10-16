const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "OCIUIQERBDCOBOBDEIB"

const {UserModel , TodoModel} = require("./db")

mongoose.connect("mongodb+srv://higyanaranjanpatra:aQeQsg44Yq5EKgjs@cluster0.vjgqs.mongodb.net/todo-gyana")


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

app.post("/signin",async(req,res)=>{
    const {email , password } = req.body;
    const user = await UserModel.findOne({
        email,
        password
    })
    console.log(user);
    if(user){
        const token = jwt.sign({
            id:user._id
        },JWT_SECRET)
        res.json({
            token:token

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