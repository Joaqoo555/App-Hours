import {AppError} from "./index";

export class BadRequestError extends AppError {
    constructor(message: string) {
        super(message, 400);
    }
}
