'use client'

import { useEffect, useState } from "react"
import { postsListUrl } from "../_constants/apiConstants"
import Link from "next/link"

export default function Blog(){

    let [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch(postsListUrl).then(res=>res.json())
        .then(resdata=>setPosts(resdata))
    }, [])

    return (
        <>
            <h3>Welcome to the Blog</h3>
            <ul>
                {
                    posts.map(post=><li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>)
                }
            </ul>
        </>
    )
}