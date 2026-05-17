import { PrismaClient } from "@prisma/client/extension";


async function bootstrap() {
    try {
        const prisma = new PrismaClient();
       await prisma.connect();
        console.log("Database connected successfully");




    } catch (error) {
        
    }
}


export default bootstrap;