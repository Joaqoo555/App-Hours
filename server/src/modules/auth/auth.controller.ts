import { Request, Response } from "express";
import { registerUserDTO } from "./auth.types";
import { registerService } from "./auth.service";
import { errorHandler } from "../../shared/errors/errorHandler";

//POST auth register
export const register = async (
  req: Request<{}, {}, registerUserDTO>,
  res: Response,
) => {
  try {
    const newUser = await registerService(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    // Handle errors and send appropriate responses using the errorHandler middleware
    return errorHandler(error, req, res);
  }
};
//POST auth login
export const login = async (req: Request, res: Response) => {};

//GET me
export const me = async (req: Request, res: Response) => {};
