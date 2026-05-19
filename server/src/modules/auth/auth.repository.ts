//access to DB
import prisma from "../../config/db";
export const findUserByEmail = async (email: string) => {
  try {
    const userFind = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return userFind;
  } catch (error) {
    throw new Error("Error finding user by email");
  }
};
