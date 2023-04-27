/*
  Warnings:

  - You are about to drop the `weekly_availabilities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "weekly_availabilities" DROP CONSTRAINT "weekly_availabilities_doctor_id_fkey";

-- DropTable
DROP TABLE "weekly_availabilities";
