
import mock from "../../mock.json"
import "../css/logement.css"
import React from 'react'
import { withRouter } from "react-router-dom";
import Rating from './rating';

class Logement extends React.Component {
    handleclick(e,classname){
        const element = document.getElementsByClassName(classname)[0]
            element.classList.toggle("active")
            e.target.classList.toggle("fas-active")
            

    }
    GetArticle=(id, Arts)=> Arts.filter((Art)=>id===Art.id )[0]
    render() {
        const article = this.GetArticle(this.props.match.params.id, mock)
        return  <div className="container-logement">
                    <div>
                        <img className="logement" src={article.cover} alt={article.title}></img>
                    </div>
                    <div className="container-infos">
                        <div className="title">
                            <p className="titre-logement">{article.title}</p>
                            <p className="location">{article.location}</p>
                            <div className="tags">
                                {article.tags.map((tag)=> <span>{tag}</span>)}
                            </div>
                        </div>
                        <div className="infos-rate">
                            <div className="name">
                                <div className="name-place">
                                    {article.host.name}
                                </div>
                                <img classname="pics-infos" src={article.host.picture} alt={article.host.name}></img>
                            </div>
                            <div className="rate">
                            <Rating rating={article.rating} />
                            </div>
                        </div>
                        </div>
                    <div className="description-container">
                        <div className="description">
                            <div className="entete" >
                                Déscription <i class="fas fa-chevron-up" onClick={(e)=>this.handleclick(e,"contenu")}></i>
                            </div>
                            <div className="contenu">
                                {article.description}
                            </div>
                        </div>
                        <div className="equipement">
                            <div className="entete">
                                Equipement <i class="fas fa-chevron-up" onClick={(e)=>this.handleclick(e,"equipement-list")}></i>
                            </div>
                            <div className="equipement-list">
                                {article.equipments.map((equipement)=> <span>{equipement}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
    } 

}
    


export default withRouter(Logement)

