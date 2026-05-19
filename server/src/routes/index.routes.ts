import { Router } from "express";
import authRouter from "../modules/auth/auth.routes"
import hourRouter from "../modules/hour-entries/hour.routes"
import reportRouter from "../modules/report/report.routes"
import userRouter from "../modules/users/user.routes"






const index = Router()





index.use("/auth", authRouter)
index.use("/hours", hourRouter)
index.use("/reports", reportRouter)
index.use("/users", userRouter)



export default index