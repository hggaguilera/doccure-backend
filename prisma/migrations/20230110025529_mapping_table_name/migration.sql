/*
  Warnings:

  - You are about to drop the `DoctorsWithSpecialties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DoctorsWithSpecialties" DROP CONSTRAINT "DoctorsWithSpecialties_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "DoctorsWithSpecialties" DROP CONSTRAINT "DoctorsWithSpecialties_specialtyId_fkey";

-- DropTable
DROP TABLE "DoctorsWithSpecialties";

-- CreateTable
CREATE TABLE "doctor_with_specialties" (
    "doctorId" TEXT NOT NULL,
    "specialtyId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'active',
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctor_with_specialties_pkey" PRIMARY KEY ("doctorId","specialtyId")
);

-- AddForeignKey
ALTER TABLE "doctor_with_specialties" ADD CONSTRAINT "doctor_with_specialties_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_with_specialties" ADD CONSTRAINT "doctor_with_specialties_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
