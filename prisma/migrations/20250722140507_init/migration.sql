-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" VARCHAR(20) NOT NULL,
    "data_nasc" TIMESTAMP(3) NOT NULL,
    "apelido" TEXT,
    "ocupacao" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "residencia" TEXT NOT NULL,
    "fotoUrl" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plano" (
    "id" UUID NOT NULL,
    "nome_plano" TEXT NOT NULL,
    "tarefas" TEXT[],

    CONSTRAINT "Plano_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
