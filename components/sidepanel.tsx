"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

type Category = {
    id: number;
    cat_name_en: string;
    cat_name_bn: string;
    subCategories: any[]; // or specify the type of subcategory if known
    // add other properties if needed
};

export default function SidePanel() {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/category")
            const res = await response.json()
            setCategories(res.categories);
            console.log(res.categories)
        })()

    }, [])
    return (
        <>
            <div>
                <h2 className="text-lg font-semibold m-4 text-[#446442]">Search by Dua Categories</h2>

                <ul className="menu bg-base-300 rounded-box w-full min-h-screen">
                    {categories.map(category => {
                        if (category.subCategories) {
                            return (
                                <li key={category.id}>
                                    <details>
                                        <summary className="p-3">{category.cat_name_en} <br />{category.cat_name_bn} </summary>
                                        <ul>
                                            {category.subCategories.map(subCategory =>(
                                              <li key={subCategory.id}><Link className="p-2" href={`/category/${category.id}/sub-category`}>{subCategory.subcat_name_en} <br />{subCategory.subcat_name_bn}</Link></li>  
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                            )
                        } else {
                            return (
                                <li key={category.id}><Link className="p-2" href={`/category/${category.id}/sub-category`}>{category.cat_name_en}</Link></li>
                            )
                        }
                    })}



                </ul>
            </div>
        </>
    )
}
