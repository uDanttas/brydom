-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "cpf" TEXT NOT NULL PRIMARY KEY,
    "senha" TEXT NOT NULL,
    "saldo" REAL NOT NULL DEFAULT 0,
    "tipo" TEXT NOT NULL DEFAULT 'cliente'
);
INSERT INTO "new_Usuario" ("cpf", "saldo", "senha") SELECT "cpf", "saldo", "senha" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
