"use client"
import { useEffect, useState } from "react"
import Link from "next/link";

type category = {
    id: number,
    cat_name_en: string,
    cat_name_bn: string,
    subCategories: any[],
}


export default function HomeComponent() {
    const [categories, setCategories] = useState<category[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/category")
            const res = await response.json()
            console.log(res)
            setCategories(res.categories)
        })()
        console.log("home component mounted");

    }, [])

    return (
        <div className="grid grid-cols-4 gap-3">
            {categories.map((category) => (
                <div key={category.id} className="col-span-1">
                    <Link href={`/category/${category.id}/sub-category`}>
                        <div className="card hover:bg-base-300">
                            <div className="card-body p-4">
                                <p className="badge badge-primary p-2">Sub-category: {category.subCategories.length}</p>
                                <h3 className="text-xl font-bold">{category.cat_name_en}</h3>
                                <h4 className="text-md">{category.cat_name_bn}</h4>
                            </div>
                        </div>
                    </Link>

                </div>
            ))}
        </div>
    )
}
