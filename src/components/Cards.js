import mock from "../mock.json"
import Card from "./pages/Card"
import React from 'react'

class Cards extends React.Component {
render () {
    
    return   <div className="card-container">{mock.map(card=><Card data={card} key={card.id} /> )}</div>
 }
}
 export default Cards

