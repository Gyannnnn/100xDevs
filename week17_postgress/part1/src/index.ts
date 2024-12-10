import { Client } from "pg";
import express from 'express'

const app = express()
app.use(express.json());

const pgClient = new Client({
  user: "neondb_owner",
  password: "vE3NX8nscdFS",
  port: 5432,
  host: "ep-ancient-butterfly-a518kar0.us-east-2.aws.neon.tech",
  database: "neondb",
  ssl: true     
});

pgClient.connect();

app.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;


    try {
        const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3);`
        const response = await pgClient.query(insertQuery,['gyan222','gyan222@gmail.com','7298793279'])
        res.json({
            message:"User Signed Up Successfully",
            User:username
        })
    } catch (error) {
        console.log(error)
        res.json({
                message:"Error While Signing up!"
        })
    }
})


console.log("Completed")