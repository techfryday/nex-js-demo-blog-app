import { postUrl } from "@/app/_constants/apiConstants";
import LikeButton from "./LikeButton";
import styles from "./page.module.css"
import LikeButtonSWR from "./LikeButtonSWR";
export async function generateStaticParams(){
    // Fetch()
    return [
        {id: "1"},
        {id: "3"}
    ]
}

export async function getArticle(id){
    const res = await fetch(postUrl(id))
    const resdata = await res.json()
    const article = resdata
    return article
}

export async function generateMetadata({params, searchParams}, parent){
    const {id} = await params
    const article = await getArticle(id)

    return {
        title: article.title,
        description: article.content,
        openGraph: {
            images: [article.image]
        }
    }
}

export default async function Article(props){
    const params = await props.params;

    const article = await getArticle(params.id)

    return (
        <>
            <h3 className={styles.myheading}>{article.title}</h3>
            <img src={article.image} alt="" height={250}/>
            <p>{article.content}</p>

            {/* <LikeButton initialLikes={article.likes} postId={article.id} /> */}
            <LikeButtonSWR initialLikes={article.likes} postId={article.id} />

           
        </>
    )
}