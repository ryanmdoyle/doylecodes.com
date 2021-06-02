/*
  Warnings:

  - You are about to drop the column `from` on the `Email` table. All the data in the column will be lost.
  - Added the required column `name` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Email" DROP COLUMN "from",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;
