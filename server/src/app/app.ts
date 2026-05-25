import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import index from "../routes/index.routes"
import helmet from "helmet";
import { handlerError } from "../shared/errors/errorHandler";
import {env} from "../config/env";
const app: Application = express();

//========== global middlewares ==========
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '15mb' }));
app.use(morgan("dev"));
app.use(cors({
    origin: env.PORT_FRONT,
    credentials: true
}));
//middleware for security headers
app.use(helmet())


//========== Routes =============
app.use("/api", index)
//====== Error handdler endware =====
app.use(handlerError)




export default app;