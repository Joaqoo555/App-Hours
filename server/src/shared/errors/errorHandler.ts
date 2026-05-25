import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { AppError } from ".";

export const handlerError = (
  error: HttpError | AppError | unknown,
  _req: Request,
  res: Response,
  _next?: NextFunction,
) => {
  // console.log(`status = ${status}, Message = ${message}`)
  // return res.status(status).send(message)

  if (error instanceof AppError) {
    const statusCode = error.statusCode;
    const message = error.message;
    return res.status(statusCode).json({ message, status: statusCode });
  } else if (error instanceof HttpError) {
    const status = error.status;
    const message = error.message;
    return res.status(status).json({ message, status });
  } else {
    const message = error instanceof Error ? error.message : "Unknown error";
    const status = 500;
    return res.status(500).json({
      message,
      status,
    });
  }
};
