// src/app/api/terms/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/app/_lib/prisma";

// GET /api/terms
export async function GET() {
  const terms = await prisma.term.findMany({
    include: {
      category: true,
      author: true,
    },
  });
  return NextResponse.json(terms);
}

// POST /api/terms
export async function POST(req: Request) {
  const body = await req.json();

  const { name, description } = body;

  // 仮の authorId, categoryId（seed.ts で作ったダミーIDに合わせて調整）
  const dummyAuthorId = "40c77720-8294-488d-b9f4-1424f5c3c42b"; // 実際のIDに差し替え必要
  const dummyCategoryId = "dcb06d60-c720-4e56-a98a-06aecc443654"; // 実際のIDに差し替え必要

  try {
    const term = await prisma.term.create({
      data: {
        name,
        description,
        authorId: dummyAuthorId,
        categoryId: dummyCategoryId,
      },
    });

    return NextResponse.json(term, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "登録失敗" }, { status: 400 });
  }
}
