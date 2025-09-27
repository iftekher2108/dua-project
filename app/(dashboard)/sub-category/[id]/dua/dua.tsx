"use client"

import { useEffect, useState } from "react"

type subCategory = {
    id: number,
    subcat_name_bn: string,
    subcat_name_en: string,
    duas: [
        {
            id: number,
            dua_name_en: string,
            dua_name_bn: string,
            top_bn: string,
            top_en: string,
            dua_arabic: string,
            transliteration_bn: string,
            transliteration_en: string,
            translation_bn: string,
            translation_en: string,
            bottom_bn: string,
            bottom_en: string,
            refference_bn: string,
            refference_en: string,
        }
    ],
    // category: {
    //     cat_name_bn: string,
    //     cat_name_en: string
    // },
}

export default function Dua({ cat_id }: { cat_id: any }) {
    const [subCategory, setSubCategory] = useState<subCategory>()

    useEffect(() => {
        (async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_URL + `/api/sub-category/${cat_id}/dua`)
            const res = await response.json()
            setSubCategory(res.subCategory)
            console.log(res.subCategory)
        })()
    }, [])

    return (
        <div className="grid grid-cols-1 gap-2">
            <div className="mb-3">
                <h3 className="text-primary text-2xl font-bold mb-2">{subCategory?.subcat_name_en}</h3>
                <p>{subCategory?.subcat_name_bn}</p>
            </div>
            {
                subCategory?.duas.map((dua, index) => (
                    <div key={index} className="col-span-1">
                        <div className="card mb-2">
                            <div className="card-body p-3">
                                <div className="mb-3">
                                    <p className="font-bold text-lg">{dua.dua_name_en}</p>
                                    <p className="text-sm">{dua.dua_name_bn}</p>
                                </div>

                                <div className="mb-2">
                                    <p>{dua.top_en}</p>
                                    <p>{dua.top_bn}</p>
                                </div>

                                <div className=" text-right mb-2">
                                    {dua.dua_arabic}
                                </div>
                                <div className="mb-2">
                                    <p>{dua.transliteration_en}</p>
                                    <p>{dua.transliteration_bn}</p>
                                </div>

                                <div className="mb-2">
                                    <p className=""></p>
                                    <p className="font-semibold">{dua.translation_en}</p>
                                    <p>{dua.translation_bn}</p>
                                </div>

                                <div className="mb-2">
                                    <p>{dua.bottom_en}</p>
                                    <p>{dua.bottom_bn}</p>
                                </div>
                                
                                <div className="text-right mb-2">
                                    <p>{dua.refference_en}</p>
                                    <p>{dua.refference_bn}</p>
                                </div>

                            </div>
                        </div>
                        <hr />
                    </div>
                ))
            }


        </div>
    )
}

