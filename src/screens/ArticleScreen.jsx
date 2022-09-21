import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ArticleScreen() {
    
    const [article, setArticle] = useState([]);
    useEffect(() => {
        fetch("http://blog.api/article")
            .then(resp => resp.json())
            .then(json => {
                json = json.sort((a, b) => {
                    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
                });
                setArticle(json)
            });
    }, [])

    const navigate = useNavigate();


    return (<>
        <h1>Liste des articles</h1>

        <table className="table table-striped">
            <thead className="table">
                <tr>
                    <th scope="col">produit</th>
                    <th scope="col">description</th>
                </tr>
            </thead>
            <tbody>
                {article.map(article => {
                    return (<tr key={article.Id_article} onClick={() => { navigate(`/article/${article.Id_article}`);}}>
                <td>{article.title}</td>
                <td>{article.content}</td>
            </tr>);
                })}
        </tbody>
    </table>

    </>);
}

export default ArticleScreen;