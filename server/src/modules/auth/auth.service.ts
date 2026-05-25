import { registerUserDTO } from "./auth.types";
import prisma from "../../config/db";
import { hashPassword } from "./utils/bcrypt";
import { createUser } from "./auth.repository";
import { ConflictError } from "../../shared/errors/conflictError";

export const registerService = async (userData: registerUserDTO) => {
    // Logic to register a user, e.g., hashing the password, saving to the database, etc.
    const { email, password } = userData;
    
    const hashedPassword = await hashPassword(password);
    if (await findUserByEmail(email)) {
      throw new ConflictError("User with this email already exists");
    }
    const {password: _, ...safeUserData} = await createUser({ ...userData, password: hashedPassword });
    return safeUserData;
};

export const findUserByEmail = async (email: string) => {
  // Logic to find a user by email in the database using Prisma and return the user data if found, or null if not found.
  const userFind = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return userFind;
};

