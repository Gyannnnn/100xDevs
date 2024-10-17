
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "OCIUIQERBDCOBOBDEIB"
const bcrypt = require('bcrypt')
const { UserModel, TodoModel } = require("./db")
const {z} = require('zod');

mongoose.connect("mongodb+srv://higyanaranjanpatra:NmgUrXyliNnZAEI4@cluster0.vjgqs.mongodb.net/todo-gyana")



app.use(express.json());




app.post("/signup", async (req, res) => {

    const requiredBody = z.object({
        email:z.string().min(3).max(100).email(),
        name:z.string().min(3).max(100),
        password:z.string().min(8)
    })

    const parsedDateWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDateWithSuccess.success){
        return res.json({
            message:"Incorrect Input format",
            error:parsedDateWithSuccess.error
        })
    }

    const { email, password, name } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)

        await UserModel.create({
            email,
            password: hashedPassword,
            name
        })
        res.json({
            message: "Successfully signedUp"
        })
    } catch (error) {
        res.status(400).json({
            message:"User already exist !"
        })
    }

});

app.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({
        email,

    })

    if (!user) {
        return res.json({
            message: "No user Found !"
        })
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    console.log(user);
    if (passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)
        res.json({
            token: token

        })
    } else {
        res.status(403).json({
            message: "Incorrect Credential"
        })
    }


});
app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title
    const done = req.body.done

    await TodoModel.create({
        title,
        done,
        userId
    })
    res.json({
        message: "Successfully Created",
        userId: userId
    })

});

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId
    })
    res.json({
        todos
    })
    console.log("Successfuly fetched todos")

});



function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.id;
        next()
    } else {
        return res.json({
            message: "Incorrect Credential"
        })
    }

}



app.listen(3000, function () {
    console.log("Server Is Running At http://localhost:3000");
})