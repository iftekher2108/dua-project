"use client"
import { useEffect, useState } from "react"
export default function HomeComponent() {
    const [ status, setSatus ] = useState("loading...")
    useEffect(()=>{
        // (async()=>{
        //   const response = await fetch(process.env.NEXT_PUBLIC_URL+"/api/category")
        //   const res = await response.json()
        //   console.log(res)
        //   setSatus(res.message)
        // })()
        // console.log("home component mounted");

        
    },[])

    return(
        <>
        <div>
            <h1 className="text-3xl font-bold ">
                iftekher mahmud pervez
                <br />
                {status}
            </h1>
        </div>
        </>
    )
}
