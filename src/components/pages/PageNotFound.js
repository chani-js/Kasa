import '../css/notfound.css'
import { Link } from "react-router-dom"
const PageNotFound=()=>{
    return  <div className="error-container">
                <div className="error">404</div>
                <div className="message">Oups! la page que vous demandez n'existe pas.</div>
                <Link to="/" className="link">Retourner sur la page d'accueil</Link>
            </div>
} 
export default PageNotFound