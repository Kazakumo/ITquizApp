import { prisma } from "@/app/_lib/prisma";
// src/app/api/terms/route.ts
import { NextResponse } from "next/server";

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
	const { name, description, authorId, categoryId } = body;

	if (!name || !description || !authorId || !categoryId) {
		return NextResponse.json(
			{ error: "name, description, authorId, categoryId are required" },
			{ status: 400 },
		);
	}

	try {
		const term = await prisma.term.create({
			data: {
				name,
				description,
				authorId,
				categoryId,
			},
		});

		return NextResponse.json(term, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "登録失敗" }, { status: 500 });
	}
}
