/*
  Warnings:

  - Added the required column `synopsis` to the `Marker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Marker" ADD COLUMN     "synopsis" TEXT NOT NULL;
