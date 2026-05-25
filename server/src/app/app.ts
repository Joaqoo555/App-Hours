import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import index from "../routes/index.routes"
import helmet from "helmet";
import { errorHandler } from "../shared/errors/errorHandler";

dotenv.config();
const PORT_FRONT = process.env.PORT_FRONT

const app: Application = express();

//========== global middlewares ==========
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '15mb' }));
app.use(morgan("dev"));
app.use(cors({
    origin: PORT_FRONT,
    credentials: true
}));
//middleware for security headers
app.use(helmet())


//========== Routes =============
app.use("/api", index)
//====== Error handdler endware =====
app.use(errorHandler)




export default app;