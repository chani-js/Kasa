import '../css/card.css'
const Card=({data})=>{
    
    return <div className="card">
                <a href=""><img className="logement" src={data.cover} alt={data.title} ></img>
                <div className="title-card">{data.title}</div></a>
            </div>
 }
 export default Card