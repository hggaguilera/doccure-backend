/*
  Warnings:

  - A unique constraint covering the columns `[person_id]` on the table `addresses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[person_id]` on the table `phone_numbers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "addresses_person_id_key" ON "addresses"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "phone_numbers_person_id_key" ON "phone_numbers"("person_id");
