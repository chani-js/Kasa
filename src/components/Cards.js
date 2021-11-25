import mock from "../mock.json"
import Card from "./pages/Card"
import React from 'react'

class Cards extends React.Component {
render () {
    
    return   <div className="page-card">
                <div className="entete-img">
                    <img src="nav.png" alt="entete nav"></img>
                    <div class="texte_centrer">Chez vous, partout et ailleurs</div>
                </div>
                <div className="card-container">
                    {mock.map(card=><Card data={card} key={card.id} /> )}
                </div>
            </div>
 }
}
 export default Cards

