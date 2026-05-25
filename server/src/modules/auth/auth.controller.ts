import { Request, Response } from "express";
import {  loginUserDTO, registerUserDTO } from "./auth.types";
import { loginService, registerService } from "./auth.service";
import { handlerError } from "../../shared/errors/errorHandler";

//POST auth register
export const register = async (
  req: Request<{}, {}, registerUserDTO>,
  res: Response,
) => {
  try {
    const newUser = await registerService(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return handlerError(error, req, res);
  }
};
//POST auth login
export const login = async (req: Request<{}, {}, loginUserDTO>, res: Response) => {
  try {
    const userLog = await loginService(req.body);
    return res.status(200).json(userLog);
  } catch (error) {
    return handlerError(error, req, res);
  }
};

//GET me
export const me = async (req: Request, res: Response) => {
  try {

  }
  catch (error) {
    return handlerError(error, req, res);
  }
};
