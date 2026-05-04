import dotenv from "dotenv";
import app from "./app";
import bootstrap from "./bootstrap";
dotenv.config();
const PORT = process.env.PORT;


async function startServer () {
    try {
        //bootstrap function here
        await bootstrap();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        
    }
}

