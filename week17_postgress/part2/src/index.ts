import express, { Request, Response } from 'express';
import { Client } from 'pg';
import bcrypt from 'bcrypt';

const app = express();

const client = new Client({
  connectionString: "postgresql://neondb_owner:vE3NX8nscdFS@ep-ancient-butterfly-a518kar0.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

client.connect().catch(err => console.error('Failed to connect to the database', err));

// Middleware
app.use(express.json());

// Routes

app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to the home page"
    })
})
//@ts-ignore
app.post("/api/signup", async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All Fields Are Required" });
    }
  
    // Validate input lengths
    if (username.length > 50 || email.length > 50) {
      return res.status(400).json({ message: "Username or Email too long" });
    }
  
    try {
      const result = await client.query("SELECT * FROM users WHERE username = $1", [username]);
      if (result.rows.length > 0) {
        return res.status(409).json({ message: "User Already Exists" });
      }
  
      const hashed_password = bcrypt.hashSync(password, 10);
  
      await client.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
        [username, email, hashed_password]
      );
  
      return res.status(201).json({ message: "User Created!" });
    } catch (error) {
      console.error("Error in signup:", error);
      return res.status(500).json({ message: "Something Went Wrong" });
    }
  });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
