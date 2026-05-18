/*
  Warnings:

  - You are about to drop the column `approvalDate` on the `hour_entries` table. All the data in the column will be lost.
  - You are about to drop the column `approverId` on the `hour_entries` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hour_entries" DROP COLUMN "approvalDate",
DROP COLUMN "approverId",
ADD COLUMN     "approvedDate" TIMESTAMP(3),
ADD COLUMN     "approvedId" INTEGER;
