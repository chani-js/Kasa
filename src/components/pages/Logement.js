import { useParams } from "react-router-dom"
import mock from "../../mock.json"
import "../css/logement.css"

const GetArticle=(id, Arts)=> Arts.filter((Art)=>id===Art.id )[0]

/*const GetTags =()=> mock.forEach(element=>{
    let tag= element.tags
    return tag
})*/

 /* const GetTags =(tags)=> {
    let tag 
    tags.forEach(element=>{
        tag+= element.tags
    })
    return tag
}*/
    

const Logement=()=>{
    let params = useParams()
    const article = GetArticle(params.id, mock)
    //const tag = GetTags()
   // console.log("tag==>",tag)
    return  <div className="container-logement">
                <div>
                    <img className="logement" src={article.cover} alt={article.title}></img>
                </div>
                <div className="title">
                    <p className="titre">{article.title}</p>
                    <p className="location">{article.location}</p>
                </div>
                <div className="tags">

                </div>
                <div className="description-container">
                    <div className="description">
                        <div className="entete">
                            Déscription
                        </div>
                        <div className="contenu">
                            {article.description}
                        </div>

                    </div>
                    <div className="equipement">
                    <div className="entete">
                            Equipement
                        </div>
                    </div>

                </div>

            </div>
} 
export default Logement

