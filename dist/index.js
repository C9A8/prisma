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
const prisma_1 = require("../src/generated/prisma");
const prisma = new prisma_1.PrismaClient();
function createUser(username, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.users.create({
                data: {
                    // username: "tiger1@gamail.com",
                    // firstname: "tiger",
                    // lastname: "nhi hai",
                    // password: "123456",
                    username: username,
                    firstname: firstname,
                    lastname: lastname,
                    password: password,
                },
            });
            console.log("User created:");
            console.table(user);
        }
        catch (error) {
            console.error(`Failed to create user: ${error}`);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
//  createUser("random@gmail.com","123456");
function updateUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const upUser = yield prisma.users.update({
                where: { id: userId },
                data: { username: "ayush@gmail.com", firstname: "ayush", lastname: "p" }
            });
        }
        catch (error) {
            console.error(`failed to update users ${error}`);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
// updateUser(3);
function getUsers(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Find specific users using findunique() 
            //const read = await prisma.users.findUnique({
            //  where : {id : id}
            //});
            const read = yield prisma.users.findMany();
            console.table(read);
        }
        catch (error) {
            console.error(`failed to get users ${error}`);
        }
        finally {
            yield prisma.$disconnect;
        }
    });
}
getUsers(3);
function deletedUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedUser = yield prisma.users.delete({
            where: { id: id }
        });
        console.log(deletedUser);
    });
}
// deletedUser(3);
