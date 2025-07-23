-- CreateTable
CREATE TABLE "Usuario" (
    "cpf" TEXT NOT NULL PRIMARY KEY,
    "senha" TEXT NOT NULL,
    "saldo" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Bot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioCpf" TEXT NOT NULL,
    "saldo" REAL NOT NULL DEFAULT 0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Bot_usuarioCpf_fkey" FOREIGN KEY ("usuarioCpf") REFERENCES "Usuario" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Operacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioCpf" TEXT NOT NULL,
    "botId" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Operacao_usuarioCpf_fkey" FOREIGN KEY ("usuarioCpf") REFERENCES "Usuario" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Operacao_botId_fkey" FOREIGN KEY ("botId") REFERENCES "Bot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
