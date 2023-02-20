-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_person_id_fkey";

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
