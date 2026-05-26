import { Router } from "express";
import {
  GET_Allusers,
  POST_user,
  GET_userById,
  UPDATE_userById,
  DELETE_userById,
} from "./user.controller";
const userRouter = Router();

//POST
userRouter.post("/", POST_user);
//GET
userRouter.get("/", GET_Allusers);
userRouter.get("/:id", GET_userById);
//UPDATE
userRouter.put("/:id", UPDATE_userById);
//DELETE
userRouter.delete("/:id", DELETE_userById);

export default userRouter;
