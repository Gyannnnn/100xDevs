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
//@ts-ignore
app.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;


    try {
        const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id;`
        
        await pgClient.query("BEGIN;")
        const response = await pgClient.query(insertQuery,[username,email,password])
        const user_id = response.rows[0].id;
        const adressInsertQuery = `INSERT INTO addresses (city,country,street,pincode,user_id) VALUES ($1,$2,$3,$4,$5)`;
        const adressInsertResponse = await pgClient.query(adressInsertQuery,[city,country,street,pincode,user_id]);

        await pgClient.query("COMMIT;")


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

app.listen(3000);