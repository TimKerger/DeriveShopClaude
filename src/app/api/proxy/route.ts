import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function GET(request: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") || "";

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

export async function POST(request: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") || "";
  const body = await request.json();

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
