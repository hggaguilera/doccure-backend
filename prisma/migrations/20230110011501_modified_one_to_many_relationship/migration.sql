/*
  Warnings:

  - You are about to drop the column `doctorId` on the `specialties` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "specialties" DROP CONSTRAINT "specialties_doctorId_fkey";

-- AlterTable
ALTER TABLE "specialties" DROP COLUMN "doctorId";

-- CreateTable
CREATE TABLE "DoctorsWithSpecialties" (
    "doctorId" TEXT NOT NULL,
    "specialtyId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'active',
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorsWithSpecialties_pkey" PRIMARY KEY ("doctorId","specialtyId")
);

-- AddForeignKey
ALTER TABLE "DoctorsWithSpecialties" ADD CONSTRAINT "DoctorsWithSpecialties_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorsWithSpecialties" ADD CONSTRAINT "DoctorsWithSpecialties_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
