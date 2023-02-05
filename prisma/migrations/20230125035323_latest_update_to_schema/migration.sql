/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `persons` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `prefix` to the `doctors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_duration` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctors" ADD COLUMN     "prefix" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "service_duration" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "persons_email_key" ON "persons"("email");
