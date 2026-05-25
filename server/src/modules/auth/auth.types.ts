import { loginUserSchema, registerUserSchema } from "./auth.schema";
import { z } from "zod";
import { Role } from "../../../prisma/generated/client";
export type registerUserDTO = z.infer<typeof registerUserSchema>;

export type loginUserDTO = z.infer<typeof loginUserSchema>;

export type loginResponseDTO = {
    token: string;
    email: string;
    firstname: string;
    lastname: string;
    createdAt: Date;
    updateAt: Date | null;
    role: Role
    id: number;
};

export type jwtPayload = {
  userId: number;
  role: Role;
};
