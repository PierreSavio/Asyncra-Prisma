/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - Added the required column `nama_lengkap` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nik` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_telp` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    ADD COLUMN `nama_lengkap` VARCHAR(191) NOT NULL,
    ADD COLUMN `nik` VARCHAR(191) NOT NULL,
    ADD COLUMN `no_telp` VARCHAR(191) NOT NULL;
