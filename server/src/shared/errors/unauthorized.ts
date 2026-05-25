import { AppError } from ".";

export class UnauthorizedError extends AppError {
    constructor(message: string) {
        super(message, 401);
    }
}