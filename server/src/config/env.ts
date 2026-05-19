import "dotenv/config";

export const env = {
    PORT: process.env.PORT || 3200,
    PORT_FRONT: process.env.PORT_FRONT || "http://localhost:3000",
    DATABASE_URL: process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/app_hours"
}

