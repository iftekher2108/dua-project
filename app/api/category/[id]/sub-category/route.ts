import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
type params = {
    id: string
}
export async function GET(req:NextRequest,context:{params:params}) {
    const { id } = context.params;
    const subCategories = await prisma.subCategory.findMany({
        where: {
            cat_id: Number(id)
        },
        include: {
            duas:true
        }
    })
   return NextResponse.json({subCategories})
}
