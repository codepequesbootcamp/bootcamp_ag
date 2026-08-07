import { PrismaClient } from "../../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

export async function GET() {
  const notebooks = await prisma.notebook.findMany();
  return Response.json(notebooks);
}

export async function POST(request) {
  const body = await request.json();
  const notebook = await prisma.notebook.create({
    data: body,
  });
  return Response.json(notebook);
}
