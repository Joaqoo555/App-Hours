import bcrypt from "bcrypt";
import { config } from "dotenv";
config();
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = parseInt(process.env.SALT_ROUNDS || "10");
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};