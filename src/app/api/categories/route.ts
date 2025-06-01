import { prisma } from "@/app/_lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const categories = await prisma.category.findMany({
			orderBy: { name: "asc" },
		});

		return NextResponse.json(categories);
	} catch (error) {
		console.error("[GET /categories]", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}

export async function POST(request: Request) {
	const body = await request.json();
	const { name } = body;

	if (!name || typeof name !== "string") {
		return NextResponse.json({ error: "名前は必須です" }, { status: 400 });
	}

	try {
		const category = await prisma.category.create({
			data: { name },
		});

		return NextResponse.json(category, { status: 201 });
	} catch (e: any) {
		if (e.code === "P2002") {
			// Prisma のユニーク制約違反
			return NextResponse.json(
				{ error: "そのカテゴリ名は既に存在します" },
				{ status: 409 },
			);
		}

		console.error(e);
		return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
	}
}
