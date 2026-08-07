import { PrismaClient } from "../../../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

export async function GET(request, { params }) {
  const { id } = await params;
  const notebook = await prisma.notebook.findUnique({
    where: { id: Number(id) },
  });
  return Response.json(notebook);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const notebook = await prisma.notebook.update({
    where: { id: Number(id) },
    data: body,
  });
  return Response.json(notebook);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const notebook = await prisma.notebook.delete({
    where: { id: Number(id) },
  });
  return Response.json(notebook);
}
