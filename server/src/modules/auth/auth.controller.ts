import { Request, Response } from "express";
import { registerUserDTO } from "./auth.types";
import { registerService } from "./auth.service";

//POST auth register
export const register = async (
  req: Request<{}, {}, registerUserDTO>,
  res: Response,
) => {
  try {
    const newUser = await registerService(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    // if (error instanceof AppError) {
    //   return res.status(error.statusCode).json({ error: error.message });
    // } else {
    //   return res.status(500).json({ error: "Internal Server Error", message: error });
    // }
    return res
      .status(500)
      .json({
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : error,
      });
  }
};
//POST auth login
export const login = async (req: Request, res: Response) => {};

//GET me
export const me = async (req: Request, res: Response) => {};
