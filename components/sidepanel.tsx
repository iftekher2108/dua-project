"use client"

import { useEffect, useState } from "react"

type Category = {
    id: number;
    cat_name_en: string;
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
                <h2 className="text-lg font-semibold mb-4 text-[#446442]">Search by Dua Categories</h2>
                <nav className="space-y-2 text-sm">
                    {categories.map(category => (
                        <a key={category.id} href="#" className="block p-2 rounded hover:bg-[#eef3ea]">{category.cat_name_en}</a>
                    ))}
                </nav>
            </div>
        </>
    )
}
