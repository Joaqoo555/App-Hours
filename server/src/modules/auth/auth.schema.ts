import {z} from "zod";
export const registerUserSchema = z.object({
    email: z.email(),
    password: z.string().min(4),
    firstname: z.string().min(2).max(20),
    lastname: z.string().min(2).max(20),
});