import { Router } from "express";
import authRouter from "./auth.routes"
import hourRouter from "./hour.routes"
import reportRouter from "./report.routes"
import userRouter from "./user.routes"






const index = Router()





index.use("/auth", authRouter)
index.use("/hours", hourRouter)
index.use("/reports", reportRouter)
index.use("/users", userRouter)



export default index