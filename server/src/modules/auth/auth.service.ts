import { loginResponseDTO, loginUserDTO, registerUserDTO } from "./auth.types";
import { comparePassword, hashPassword } from "../../shared/utils/bcrypt";
import { createUser, findUserByEmail } from "./auth.repository";
import { ConflictError } from "../../shared/errors/conflictError";
import { registerUserSchema } from "./auth.schema";
import { BadRequestError } from "../../shared/errors/badRequest";
import { UnauthorizedError } from "../../shared/errors/unauthorized";
import { generateToken } from "../../shared/utils/jwt";

export const registerService = async (userData: registerUserDTO) => {
  const { email, password } = userData;
  // Validate user data using Zod schema
  const parseUser = registerUserSchema.safeParse(userData);
  if (!parseUser.success) {
    throw new BadRequestError("Invalid user data");
  }
  const hashedPassword = await hashPassword(password);
  // Check if user with the same email already exists
  if (await findUserByEmail(email)) {
    throw new ConflictError("User with this email already exists");
  }
  // Save the user to the database using Prisma and return the created user data (excluding the password).
  const { password: _, ...safeUserData } = await createUser({
    ...userData,
    password: hashedPassword,
  });
  return safeUserData;
};


export const loginService = async (userData: loginUserDTO): Promise<loginResponseDTO> => {
  const { email, password } = userData;
  const userFound = await findUserByEmail(email);
  if(!userFound || !(await comparePassword(password, userFound.password))) {
    throw new UnauthorizedError("Invalid credentials");
  }
  //generate token
  const payload = {
    userId: userFound.id,
    role: userFound.role,
  };
  const token = generateToken(payload);
  const { password: _, ...safeUserData } = userFound;
  return { ...safeUserData, token };
}
