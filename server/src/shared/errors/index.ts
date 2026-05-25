import {HttpError} from "http-errors";

export class AppError extends HttpError {
    constructor(public message: string, public statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
