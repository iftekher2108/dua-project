"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
type subCategory = {
    id: number,
    subcat_name_bn: string,
    subcat_name_en: string,
    duas: any[],
}
export default function SubCat({id}:{id:any}) {
    const [subCategories, setSubCategories] = useState<subCategory[]>([])
    useEffect(() => {
        (async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_URL + `/api/category/${id}/sub-category`)
            const res = await response.json()
            setSubCategories(res.subCategories)
            console.log(res.subCategories)
        })()
    }, [])
    return (
            <div className="grid grid-cols-1 gap-2">
                {
                    subCategories.map((subCategory) => (
                        <div key={subCategory.id} className="col-span-1">
                            <Link href={`/sub-category/${subCategory.id}/dua`}>
                                <div className="card hover:bg-base-300">
                                    <div className="card-body p-4">
                                        <p className="badge badge-primary p-2">Duas: {subCategory.duas.length}</p>
                                        <h3 className="text-xl font-bold">{subCategory.subcat_name_en}</h3>
                                        <h4 className="text-md">{subCategory.subcat_name_bn}</h4>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))
                }
            </div>
    )
}
