'use client'

import { useEffect, useState } from "react"
import { postsListUrl } from "../_constants/apiConstants"
import Link from "next/link"
import styles from "./page.module.css"

export default function Blog(){

    let [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch(postsListUrl).then(res=>res.json())
        .then(resdata=>setPosts(resdata))
    }, [])

    return (
        <>
            <h3 className={styles.myheading}>Welcome to the Blog</h3>
            <ul>
                {
                    posts.map(post=><li className={styles.articleListItem} key={post.id}><Link className={styles.linkStyle} href={`/blog/${post.id}`}>{post.title}</Link></li>)
                }
            </ul>
                <p>
                    Sample Content
                </p>
             <style jsx>{`
                p {
                    color: red;
                }
            `}</style>
        </>
    )
}