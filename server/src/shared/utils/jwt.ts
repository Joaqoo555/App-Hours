import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "../../config/env";
import { jwtPayload } from "../../modules/auth/auth.types";
export const generateToken = (payload: jwtPayload): string => {
    const secretKey = env.JWT_SECRET;
    const expiresIn = env.JWT_EXPIRES_IN as SignOptions["expiresIn"];
    return jwt.sign(payload, secretKey, { expiresIn });
};

