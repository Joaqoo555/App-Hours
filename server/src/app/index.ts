import bootstrap from "./bootstrap";

async function startServer() {
  try {
    //bootstrap function here
    await bootstrap();
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

void startServer();
