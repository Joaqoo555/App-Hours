/*
  Warnings:

  - You are about to drop the column `extraHours` on the `hour_entries` table. All the data in the column will be lost.
  - Added the required column `dailyMeal` to the `hour_entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extra100Hours` to the `hour_entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extra50Hours` to the `hour_entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isHoliday` to the `hour_entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `launchWork` to the `hour_entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `night50Hours` to the `hour_entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalHours` to the `hour_entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pernoctation` to the `hour_entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenHourMeal` to the `hour_entries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hour_entries" DROP COLUMN "extraHours",
ADD COLUMN     "dailyMeal" BOOLEAN NOT NULL,
ADD COLUMN     "extra100Hours" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "extra50Hours" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "isHoliday" BOOLEAN NOT NULL,
ADD COLUMN     "launchWork" BOOLEAN NOT NULL,
ADD COLUMN     "night50Hours" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "normalHours" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "pernoctation" BOOLEAN NOT NULL,
ADD COLUMN     "tenHourMeal" BOOLEAN NOT NULL;
