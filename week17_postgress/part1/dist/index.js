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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client({
    user: "neondb_owner",
    password: "vE3NX8nscdFS",
    port: 5432,
    host: "ep-ancient-butterfly-a518kar0.us-east-2.aws.neon.tech",
    database: "neondb",
    ssl: true
});
// postgresql://neondb_owner:vE3NX8nscdFS@ep-ancient-butterfly-a518kar0.us-east-2.aws.neon.tech/neondb?sslmode=require
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        const response = yield pgClient.query("SELECT * FROM users;");
        console.log(response.rows[1].username);
        console.log(response.rows[1].email);
        console.log(response.rows[1].password);
        const response2 = yield pgClient.query("UPDATE users SET username = 'gyan2' WHERE id = 2");
        console.log(response2);
        console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
        const response3 = yield pgClient.query("SELECT * FROM users");
        console.log(response3.rows);
    });
}
main();
console.log("Completed");
