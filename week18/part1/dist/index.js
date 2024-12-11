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
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.create({
            data: {
                username: "Gyanranjan Patra",
                password: "123  2",
                age: 21,
                city: "Delhi",
            },
        });
    });
}
function deleteaUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.delete({
            where: {
                id: 1
            }
        });
        console.log("deleted succsessfully");
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.update({
            where: {
                id: 2
            },
            data: {
                username: "Runa Patra"
            }
        });
        console.log("Updated Successfully");
    });
}
function findUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield client.user.findFirst({
                where: {
                    id: 2
                }
            });
            console.log(user);
        }
        catch (error) {
            console.log(error);
        }
    });
}
// deleteaUser();
// createUser();
// updateUser();
findUser();
