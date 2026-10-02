import { NextResponse } from 'next/server';

// In-memory store (persists while the server is running)
let globalRatings = {
  amazing: 42,
  good: 15,
  better: 8,
  trash: 3,
};

export async function GET() {
  const total = Object.values(globalRatings).reduce((a, b) => a + b, 0);
  return NextResponse.json({ ratings: globalRatings, total });
}

export async function POST(request: Request) {
  try {
    const { category } = await request.json();
    
    if (globalRatings[category as keyof typeof globalRatings] !== undefined) {
      globalRatings[category as keyof typeof globalRatings] += 1;
    }

    const total = Object.values(globalRatings).reduce((a, b) => a + b, 0);
    return NextResponse.json({ success: true, ratings: globalRatings, total });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}