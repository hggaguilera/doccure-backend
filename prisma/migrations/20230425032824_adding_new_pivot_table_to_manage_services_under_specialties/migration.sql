-- CreateTable
CREATE TABLE "specialty_services" (
    "serviceId" TEXT NOT NULL,
    "specialtyId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'active',
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "specialty_services_specialtyId_serviceId_key" ON "specialty_services"("specialtyId", "serviceId");

-- AddForeignKey
ALTER TABLE "specialty_services" ADD CONSTRAINT "specialty_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specialty_services" ADD CONSTRAINT "specialty_services_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "specialties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
