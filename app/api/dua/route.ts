import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req:NextRequest) {
    const duas = await prisma.dua.findMany();
    return NextResponse.json({ duas });
}
