import { connectDB } from "../config/db";
import { env } from "../config/env";
import app from "./app";

export const bootstrap = async ()=> {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Error during bootstrap:", error);
    return Promise.reject(error);
  }
}


