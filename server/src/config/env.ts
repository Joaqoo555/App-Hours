import "dotenv/config";
import {z} from "zod";


export const envSchema = z.object({
    PORT: z.string(),
    PORT_FRONT: z.string(),
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string(),
    JWT_EXPIRES_IN: z.string(),
    SALT_ROUNDS: z.string(),
    API_KEY: z.string(),
})

export const env = envSchema.parse(process.env);