import { registerUserDTO } from "./auth.types";
import prisma from "../../config/db";
import { hashPassword } from "./utils/bcrypt";
import { createUser } from "./auth.repository";
import { ConflictError } from "../../shared/errors/conflictError";
import { registerUserSchema } from "./auth.schema";
import { AppError } from "../../shared/errors";

export const registerService = async (userData: registerUserDTO) => {
  // Logic to register a user, e.g., hashing the password, saving to the database, etc.
  const { email, password } = userData;
  // Validate user data using Zod schema
  const parseUser = registerUserSchema.safeParse(userData);
  if (!parseUser.success) {
    throw new Error("Invalid user data");
  }
  // Hash the password before saving the user to the database
  const hashedPassword = await hashPassword(password);
  // Check if user with the same email already exists
  if (await findUserByEmail(email)) {
    throw new Error("User with this email already exists");
  }
  // Save the user to the database using Prisma and return the created user data (excluding the password).
  const { password: _, ...safeUserData } = await createUser({
    ...userData,
    password: hashedPassword,
  });
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
