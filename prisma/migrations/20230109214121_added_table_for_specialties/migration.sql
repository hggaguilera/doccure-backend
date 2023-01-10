/*
  Warnings:

  - You are about to drop the column `specialization` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `specialties` table. All the data in the column will be lost.
  - You are about to drop the column `service_description` on the `specialties` table. All the data in the column will be lost.
  - You are about to drop the column `service_name` on the `specialties` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[specialty_name]` on the table `specialties` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `specialty_description` to the `specialties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialty_name` to the `specialties` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appointments" DROP CONSTRAINT "appointments_service_id_fkey";

-- DropIndex
DROP INDEX "specialties_service_name_key";

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "specialization";

-- AlterTable
ALTER TABLE "specialties" DROP COLUMN "price",
DROP COLUMN "service_description",
DROP COLUMN "service_name",
ADD COLUMN     "doctorId" TEXT,
ADD COLUMN     "specialty_description" TEXT NOT NULL,
ADD COLUMN     "specialty_name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "service_description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'active',
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "services_service_name_key" ON "services"("service_name");

-- CreateIndex
CREATE UNIQUE INDEX "specialties_specialty_name_key" ON "specialties"("specialty_name");

-- AddForeignKey
ALTER TABLE "specialties" ADD CONSTRAINT "specialties_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
