const express = require("express");
const app = express();

app.use(express.json())

const users = [];

function generateRandomString(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < charactersLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
}

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


    
})

app.post("/signin",(req,res)=>{
  const userName = req.body.userName;
  const userPassword = req.body.userPassword;

  const foundUser = users.find((u) => {
    return userName == u.userName && userPassword == u.userPassword;
  });

  if (foundUser) {
    const token = generateRandomString();  // Generate a random token of 16 characters
    foundUser.token = token;
    res.json({
      token: token
    });
  } else {
    return res.json({
      message: "Invalid User Credential"
    });
  }

})

app.listen(3000,()=>{
    console.log("Server Is Running At 3000");
})