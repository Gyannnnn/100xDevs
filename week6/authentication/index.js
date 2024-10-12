const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const jwt_secret = "pvioudnwdncinewfjkriyalingyana"

app.use(express.json())

const users = [];



app.get("/",(req,res)=>{
    res.json({
        "Message":"Home Page"
    })
})
app.post("/signup",(req,res)=>{
    const userName = req.body.userName;
    const userPassword = req.body.userPassword;

    users.push({
        userName:userName,
        userPassword:userPassword
    });
    res.json({
        message:"SignedUp Successfully"
    });

    console.log(users)


    
})

app.post("/signin",(req,res)=>{
  const userName = req.body.userName;
  const userPassword = req.body.userPassword;

  let foundUser = null;

  for (let i = 0; i<users.length; i++){
    if(users[i].userName == userName && users[i].userPassword == userPassword){
        foundUser = users[i];
    }
  }
  if(foundUser){
    const token  = jwt.sign({
        userName:userName
    },jwt_secret)
    // foundUser.token = token;
    res.json({
        message:"Signed In Successfull",
        token:token
    })
  }else{
    res.status(403).send({
        message:"Invalid Usercredential"
    })
  }
  console.log(users)

})

app.get("/me",(req,res)=>{
    const token = req.headers.token;

    const decodedUser  = jwt.verify(token,jwt_secret) /// will verify


    let foundUser = null;

    for(let i = 0 ; i< users.length ; i++){
        if(users[i].token == token){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            userName:foundUser.userName,
            userPassword:foundUser.userPassword
        })
    }else{
        res.json({
            message:"Invalid token"
        })
    }
})

app.listen(3000,()=>{
    console.log("Server Is Running At 3000");
})