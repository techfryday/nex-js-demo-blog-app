'use client'

import { postUrl } from "@/app/_constants/apiConstants";
import LikeButton from "./LikeButton";
import React, { useEffect, useState } from "react";


export default  function Article(props){

    let [article, setArticle] = useState([])

    async function getArticle(id){
        const res = await fetch(postUrl(id))
        const resdata = await res.json()
        const article = resdata
        setArticle(article)
    }

    const params =  React.use(props.params);
    

    useEffect(()=>{
        getArticle(params.id)
    }, [])

    return (
        <>
            <h3>{article.title}</h3>
            <img src={article.image} alt="" height={250}/>
            <p>{article.content}</p>

            <LikeButton initialLikes={article.likes} postId={article.id} />
        </>
    )
}