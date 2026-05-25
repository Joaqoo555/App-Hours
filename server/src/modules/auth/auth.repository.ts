import prisma from "../../config/db";
import { findUserByEmail } from "./auth.service";
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
