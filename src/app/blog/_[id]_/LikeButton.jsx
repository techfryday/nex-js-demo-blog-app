'use client'

import { postUrl } from "@/app/_constants/apiConstants"
import { useState } from "react"

export default function LikeButton({initialLikes, postId}){

    let [likes, setLikes] = useState(initialLikes)

    async function incrementLike(){
        const res = await fetch(postUrl(postId), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"likes": likes+1})
        })
        if(res.status==200){
            setLikes(likes+1)
        }
        else{
            alert("Something Went Wrong!")
        }
        
    }

    return(
        <>
            <button onClick={incrementLike}>{likes} Likes</button>
        </>
    )
}