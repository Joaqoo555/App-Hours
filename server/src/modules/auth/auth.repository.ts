import prisma from "../../config/db";
import { registerUserDTO } from "./auth.types";

export const createUser = async (userData: registerUserDTO) => {
  try {
    const { email, firstname, lastname, password } = userData;
    //create user
    const newUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Error creating user");
  }
};
export const findUserByEmail = async (email: string) => {
  const userFind = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return userFind;
};
