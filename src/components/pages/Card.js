import { Link } from 'react-router-dom'
import React from 'react'
import '../css/card.css'

class Card extends React.Component {
    render() {
        return <div className="card">
        <Link to={`/Logement/${this.props.data.id}`} className="link-card">
            <img className="logement" src={this.props.data.cover} alt={this.props.data.title} ></img>
            <div className="title-card">{this.props.data.title}</div>
            <div className="layer-card"></div>
        </Link>
        
    </div>
    }
  }

 export default Card