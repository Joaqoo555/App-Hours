/*
  Warnings:

  - Added the required column `siteId` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "hour_entries_userId_vehicleId_projectId_workDate_idx";

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "siteId" INTEGER NOT NULL;

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
