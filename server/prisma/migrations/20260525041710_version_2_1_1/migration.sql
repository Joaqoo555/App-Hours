-- CreateEnum
CREATE TYPE "DriverSignature" AS ENUM ('SIGNED_TO_GO', 'SIGNED_TO_RETURN', 'BETWEEN', 'NOT_SIGNED');

-- CreateEnum
CREATE TYPE "HourEntryStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sites" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "sites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "projectNumber" TEXT NOT NULL,
    "tittle" TEXT,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "siteId" INTEGER NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hour_entries" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "workDate" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "normalHours" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "extra50Hours" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "night50Hours" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "extra100Hours" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "tenHourMeal" BOOLEAN NOT NULL,
    "launchWork" BOOLEAN NOT NULL,
    "pernoctation" BOOLEAN NOT NULL,
    "dailyMeal" BOOLEAN NOT NULL,
    "isHoliday" BOOLEAN NOT NULL,
    "driverSignature" "DriverSignature" NOT NULL,
    "taskDetails" TEXT,
    "status" "HourEntryStatus" NOT NULL DEFAULT 'PENDING',
    "approvedId" INTEGER,
    "approvedDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "hour_entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_firstname_idx" ON "users"("email", "firstname");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_plate_key" ON "vehicles"("plate");

-- CreateIndex
CREATE INDEX "vehicles_plate_idx" ON "vehicles"("plate");

-- CreateIndex
CREATE INDEX "sites_name_idx" ON "sites"("name");

-- CreateIndex
CREATE UNIQUE INDEX "projects_projectNumber_key" ON "projects"("projectNumber");

-- CreateIndex
CREATE INDEX "projects_projectNumber_active_idx" ON "projects"("projectNumber", "active");

-- CreateIndex
CREATE INDEX "hour_entries_userId_idx" ON "hour_entries"("userId");

-- CreateIndex
CREATE INDEX "hour_entries_projectId_idx" ON "hour_entries"("projectId");

-- CreateIndex
CREATE INDEX "hour_entries_vehicleId_idx" ON "hour_entries"("vehicleId");

-- CreateIndex
CREATE INDEX "hour_entries_workDate_idx" ON "hour_entries"("workDate");

-- CreateIndex
CREATE INDEX "hour_entries_status_idx" ON "hour_entries"("status");

-- CreateIndex
CREATE INDEX "hour_entries_createdAt_idx" ON "hour_entries"("createdAt");

-- CreateIndex
CREATE INDEX "hour_entries_userId_workDate_idx" ON "hour_entries"("userId", "workDate");

-- CreateIndex
CREATE INDEX "hour_entries_projectId_workDate_idx" ON "hour_entries"("projectId", "workDate");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "sites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hour_entries" ADD CONSTRAINT "hour_entries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hour_entries" ADD CONSTRAINT "hour_entries_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hour_entries" ADD CONSTRAINT "hour_entries_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
