import { useParams } from "react-router-dom"
import mock from "../../mock.json"
import "../css/logement.css"

const GetArticle=(id, Arts)=> Arts.filter((Art)=>id===Art.id )[0]
  

const Logement=()=>{
    let params = useParams()
    const article = GetArticle(params.id, mock)
    console.log("params==>",params.id)
    console.log("article==>",article)

    return  <div className="container-logement">
                <div>
                    <img className="logement" src={article.cover} alt={article.title}></img>
                </div>
                <div className="title">
                    <p className="titre">{article.title}</p>
                    <p className="location">{article.location}</p>
                </div>

            </div>
} 
export default Logement

