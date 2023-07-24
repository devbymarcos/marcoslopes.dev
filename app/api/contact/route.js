import { NextRequest, NextResponse } from "next/server";

export async function POST(request, response) {
  const resp = await request.json();
  console.log(resp);
}
