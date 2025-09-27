import prisma from "@/lib/prisma";
import { NextRequest,NextResponse } from "next/server";
type params = {
    id:string
}
export async function GET(req:NextRequest,context:{params:params}) {
    const { id } = context.params;
    const duas = await prisma.dua.findMany({
        where:{
            subcat_id: Number(id)
        },
        include:{
            category:true,
            subCategory:true
        }
    })
    return NextResponse.json({duas})
}

