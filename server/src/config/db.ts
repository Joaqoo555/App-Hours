//import { PrismaClient } from "@prisma/client/extension";



import {env} from "./env";
import { PrismaClient } from "../../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";



const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL
});
const prisma = new PrismaClient({
    log:["query","error","warn","info"],
    adapter
});



export async function connectDB() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);

        throw error;
    }
}

export async function disconnectDB() {
    try {
        await prisma.$disconnect();
        console.log("Database disconnected successfully");
    }
    catch (error) {
        console.error("Error disconnecting from database:", error);
        throw error;
    }
}

export default prisma;


