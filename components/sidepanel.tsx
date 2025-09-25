"use client"

import { useEffect, useState } from "react"

type Category = {
    id: number;
    cat_name_en: string;
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
                                        <summary className="p-3">{category.cat_name_en}</summary>
                                        <ul>
                                            {category.subCategories.map(subCategory =>(
                                              <li key={subCategory.id}><a className="p-2" href="#">{subCategory.subcat_name_en}</a></li>  
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                            )
                        } else {
                            return (
                                <li key={category.id}><a className="p-2" href="#">{category.cat_name_en}</a></li>
                            )
                        }
                    })}



                </ul>
            </div>
        </>
    )
}
