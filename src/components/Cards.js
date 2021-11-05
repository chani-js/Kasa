import mock from "../mock.json"
import Card from "./pages/Card"

const Cards=()=>{
    
    return   <div className="card-container">{mock.map(card=><Card data={card} key={card.id} /> )}</div>
 }
 export default Cards

