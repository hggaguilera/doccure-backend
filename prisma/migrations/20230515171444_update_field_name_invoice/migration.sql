/*
  Warnings:

  - You are about to drop the column `client_id` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `item` on the `InvoiceItem` table. All the data in the column will be lost.
  - Added the required column `person_id` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_client_id_fkey";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "client_id",
ADD COLUMN     "person_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InvoiceItem" DROP COLUMN "item",
ADD COLUMN     "service" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
