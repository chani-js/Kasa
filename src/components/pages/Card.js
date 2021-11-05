import '../css/card.css'
const Card=({data})=>{
    
    return <div className="card">
                <img src={data.cover} alt={data.title} ></img>
                <div className="title-card">{data.title}</div>
            </div>
 }
 export default Card