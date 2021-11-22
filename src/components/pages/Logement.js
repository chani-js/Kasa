
import mock from "../../mock.json"
import "../css/logement.css"
import React from 'react'

import { withRouter } from "react-router-dom";



class Logement extends React.Component {

    GetArticle=(id, Arts)=> Arts.filter((Art)=>id===Art.id )[0]
    render() {
        const article = this.GetArticle(this.props.match.params.id, mock)
        return  <div className="container-logement">
                    <div>
                        <img className="logement" src={article.cover} alt={article.title}></img>
                    </div>
                    <div className="title">
                        <p className="titre">{article.title}</p>
                        <p className="location">{article.location}</p>
                    </div>
                    <div className="tags">
                        {article.tags.map((tag)=> <span>{tag}</span>)}
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
                        <div className="equipement-list">
                        {article.equipments.map((equipement)=> <span>{equipement}</span>)}
                        </div>
                        </div>
    
                    </div>
    
                </div>
    } 

}
    


export default withRouter(Logement)

