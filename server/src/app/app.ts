import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import router from "../routes/index.routes"
import helmet from "helmet";
import { HttpError } from "http-errors";

dotenv.config();
const PORT_FRONT = process.env.PORT_FRONT

const app: Application = express();

//==========Mddlewares globales==========
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '15mb' }));
app.use(morgan("dev"));
app.use(cors({
    origin: PORT_FRONT,
    credentials: true
}));
//middleware para seguridad en los headers
app.use(helmet())


//========== Rutas =============
app.use(router)
//====== Error handdler endware =====
app.use((error:HttpError, _req:Request, res:Response, _next:NextFunction)=>{
    const status = error.status
    const message = error.message
    console.log(`Hubo un errorStatus = ${status},Message = ${message}`)
    res.status(status).send(message)
})




export default app;