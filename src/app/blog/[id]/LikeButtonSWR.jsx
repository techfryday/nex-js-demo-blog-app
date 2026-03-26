'use client'

import { postUrl } from "@/app/_constants/apiConstants"
// import { useState } from "react"
import useSWR from "swr"


const fetcher = (...args)=> fetch(...args).then(res=>res.json())

export default function LikeButtonSWR({postId}){

    let {data, error, isLoading, mutate} = useSWR(postUrl(postId), fetcher)

    async function incrementLike(){

        const updatedLikes = data.likes + 1

        mutate({...data, likes: updatedLikes}, false)
        
        const res = await fetch(postUrl(postId), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"likes": data.likes+1})
        })
        if(res.status!=200){
            alert("Something Went Wrong!")
            mutate()
        }
        
    }

    if (error) return (<><h3>Somthing went wrong!</h3></>)
    if (isLoading) return (<><h3>Loading...</h3></>)
    return(
        <>
        
            <button onClick={incrementLike}>{data.likes} Likes</button>
        </>
    )
}