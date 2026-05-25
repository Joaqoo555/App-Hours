import { AppError } from ".";

export class ConflictError extends AppError {
    constructor(message: string) {
        super(message, 409);
    }
}