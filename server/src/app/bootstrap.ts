import { connectDB } from "../config/db";
import { env } from "../config/env";
import app from "./app";

async function bootstrap() {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Error during bootstrap:", error);
    throw error;
  }
}

export default bootstrap;
