import { Role } from "../users/user.types"
import { registerUserSchema } from "./auth.schema"
import z from "zod"

export type registerUserDTO = z.infer<typeof registerUserSchema>

export type loginUserDTO = {

}
export type jwtPayload = {
    userId: number;
    role: Role;
}
