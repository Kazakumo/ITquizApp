import { NextResponse } from 'next/server';
import { prisma } from '@/app/_lib/prisma';

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error('[GET /categories]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
