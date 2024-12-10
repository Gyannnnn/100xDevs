"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const bcrypt_1 = __importDefault(require("bcrypt"));
const app = (0, express_1.default)();
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:vE3NX8nscdFS@ep-ancient-butterfly-a518kar0.us-east-2.aws.neon.tech/neondb?sslmode=require",
});
client.connect().catch(err => console.error('Failed to connect to the database', err));
// Middleware
app.use(express_1.default.json());
// Routes
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the home page"
    });
});
//@ts-ignore
app.post("/api/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All Fields Are Required" });
    }
    // Validate input lengths
    if (username.length > 50 || email.length > 50) {
        return res.status(400).json({ message: "Username or Email too long" });
    }
    try {
        const result = yield client.query("SELECT * FROM users WHERE username = $1", [username]);
        if (result.rows.length > 0) {
            return res.status(409).json({ message: "User Already Exists" });
        }
        const hashed_password = bcrypt_1.default.hashSync(password, 10);
        yield client.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, hashed_password]);
        return res.status(201).json({ message: "User Created!" });
    }
    catch (error) {
        console.error("Error in signup:", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
