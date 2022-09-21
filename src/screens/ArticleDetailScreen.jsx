import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


const ArticleDetailScreen = () => {

    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch("http://blog.api/article/"+id)
            .then(resp => resp.json())
            .then(json => {
                setArticle(json)
            });
    }, [id]);

    return (<>
        <h1>Détail du mot clé : </h1>
        <p>{article?.title}</p>
        <p>{article?.content}</p>

    </>);
}

export default ArticleDetailScreen