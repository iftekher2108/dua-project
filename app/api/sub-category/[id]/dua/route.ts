import prisma from "@/lib/prisma";
import { NextRequest,NextResponse } from "next/server";
type params = {
    id:string
}
export async function GET(req:NextRequest,context:{params:params}) {
    const { id } = context.params;
    const subCategory = await prisma.subCategory.findUnique({
        where:{
            id: Number(id)
        },
        include:{
            duas:true,
            category:true,
        }
    })
    return NextResponse.json({subCategory})
}

