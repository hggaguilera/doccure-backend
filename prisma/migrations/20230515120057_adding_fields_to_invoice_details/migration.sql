/*
  Warnings:

  - The `number` column on the `Invoice` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[customId]` on the table `Invoice` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customId` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Invoice_number_key";

-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "customId" TEXT NOT NULL,
DROP COLUMN "number",
ADD COLUMN     "number" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "InvoiceItem" ADD COLUMN     "item" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_customId_key" ON "Invoice"("customId");
