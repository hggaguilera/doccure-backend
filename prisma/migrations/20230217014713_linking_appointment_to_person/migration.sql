/*
  Warnings:

  - You are about to drop the column `email` on the `appointments` table. All the data in the column will be lost.
  - You are about to drop the column `patient_name` on the `appointments` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `appointments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[person_id]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `person_id` to the `appointments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "appointments" DROP COLUMN "email",
DROP COLUMN "patient_name",
DROP COLUMN "phone_number",
ADD COLUMN     "person_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "appointments_person_id_key" ON "appointments"("person_id");

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
