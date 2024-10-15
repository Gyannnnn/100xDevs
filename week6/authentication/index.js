const express = require("express");
const cors = require("cors"); // Ensure CORS is included
const jwt = require("jsonwebtoken");

const app = express();
const jwt_secret = "pvioudnwdncinewfjkriyalingyana";
let homePageReq = 0;
const users = [];

app.use(express.json());
app.use(cors()); // Enable CORS for frontend-backend communication

// Middleware to log home page requests
function logger(req, res, next) {
    homePageReq++;
    next();
}

// Authentication middleware
function auth(req, res, next) {
    const token = req.headers.token;
    try {
        const decodedData = jwt.verify(token, jwt_secret);
        req.user = decodedData; // Store decoded data in req
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid or Expired Token" });
    }
}

// Routes
app.get("/", logger, (req, res) => {
    res.json({ message: "Home Page" });
});

app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    users.push({ username, password });
    res.json({ message: "Signed Up Successfully" });
});

app.post("/signin", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        (user) => user.username === username && user.password === password
    );

    if (user) {
        const token = jwt.sign({ username }, jwt_secret);
        res.json({ message: "Signed In Successfully", token });
    } else {
        res.status(403).json({ message: "Invalid Credentials" });
    }
});

app.get("/me", auth, (req, res) => {
    const { username } = req.user;

    const user = users.find((user) => user.username === username);

    if (user) {
        res.json({ userName: user.username });
    } else {
        res.status(404).json({ message: "User Not Found" });
    }
});

app.get("/logger", (req, res) => {
    res.json({
        message: `Total Number Of Requests to the Home Page: ${homePageReq}`
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
