/*
  Warnings:

  - You are about to drop the column `saldo` on the `Bot` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioCpf` on the `Bot` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `Operacao` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioCpf` on the `Operacao` table. All the data in the column will be lost.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `usuarioId` to the `Bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Operacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT false,
    "metaBatida" BOOLEAN NOT NULL DEFAULT false,
    "saldoBot" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "Bot_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bot" ("ativo", "id") SELECT "ativo", "id" FROM "Bot";
DROP TABLE "Bot";
ALTER TABLE "new_Bot" RENAME TO "Bot";
CREATE TABLE "new_Operacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "botId" INTEGER,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Operacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Operacao_botId_fkey" FOREIGN KEY ("botId") REFERENCES "Bot" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Operacao" ("botId", "id", "valor") SELECT "botId", "id", "valor" FROM "Operacao";
DROP TABLE "Operacao";
ALTER TABLE "new_Operacao" RENAME TO "Operacao";
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'cliente',
    "saldo" REAL NOT NULL DEFAULT 0,
    "lucroHoje" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_Usuario" ("cpf", "saldo", "senha", "tipo") SELECT "cpf", "saldo", "senha", "tipo" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
