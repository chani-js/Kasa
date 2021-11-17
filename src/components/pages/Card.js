import { Link } from 'react-router-dom'
import '../css/card.css'
const Card=({data})=>{
    
    return <div className="card">
                <Link to={`/Logement/${data.id}`}><img className="logement" src={data.cover} alt={data.title} ></img>
                <div className="title-card">{data.title}</div></Link>
            </div>
 }
 export default Card