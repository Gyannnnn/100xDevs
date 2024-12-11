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
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client({
    user: "neondb_owner",
    password: "vE3NX8nscdFS",
    port: 5432,
    host: "ep-ancient-butterfly-a518kar0.us-east-2.aws.neon.tech",
    database: "neondb",
    ssl: true
});
pgClient.connect();
//@ts-ignore
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id;`;
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        const user_id = response.rows[0].id;
        const adressInsertQuery = `INSERT INTO addresses (city,country,street,pincode,user_id) VALUES ($1,$2,$3,$4,$5)`;
        const adressInsertResponse = yield pgClient.query(adressInsertQuery, [city, country, street, pincode, user_id]);
        res.json({
            message: "User Signed Up Successfully",
            User: username
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error While Signing up!"
        });
    }
}));
console.log("Completed");
app.listen(3000);
