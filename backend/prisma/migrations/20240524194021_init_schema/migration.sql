-- CreateTable
CREATE TABLE "Todos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "due_date" TEXT NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
