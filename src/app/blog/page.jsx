'use client'

import { useEffect, useState } from "react"
import { postsListUrl } from "../_constants/apiConstants"
import Link from "next/link"
import styles from "./page.module.css"
import useSWR from "swr"

export const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Blog() {

    // let [posts, setPosts] = useState([])
    // useEffect(()=>{
    //     fetch(postsListUrl).then(res=>res.json())
    //     .then(resdata=>setPosts(resdata))
    // }, [])

    const { data, error, isLoading } = useSWR(postsListUrl, fetcher)

    if (error) return (<><h1>Failed To Load Content</h1></>)
    if (isLoading) return (<><h1>Loading...</h1></>)
    else {

        const posts = data
        return (
            <>

                <h3 className={styles.myheading}>Welcome to the Blog</h3>
                <ul>
                    {
                        posts.map(post => <li className={styles.articleListItem} key={post.id}><Link className={styles.linkStyle} href={`/blog/${post.id}`}>{post.title}</Link></li>)
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
}