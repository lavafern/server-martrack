/*
  Warnings:

  - Added the required column `time_utc` to the `Vessel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vessel" ADD COLUMN     "time_utc" TIMESTAMP(3) NOT NULL;
