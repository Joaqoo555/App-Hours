import { Router } from "express";
import {login, me, register} from "./auth.controller";
const authRouter = Router()

//import middlewares and controllers here

//POST auth register
authRouter.post("/register", register)
//POST auth login
authRouter.post("/login", login)
//GET me
authRouter.get("/me", me)

export default authRouter;