import { Link } from "react-router-dom"
const Nav=()=>{
    return <div className="topnav">
             <h1 className="logo-nav">Kasa</h1>
                <div className="link">
                   <Link to="/" activeClassName="isactive">Accueil</Link>
                   <Link to="/apropos" className="apropos">A propos</Link>
                </div>
           </div>
 }
 export default Nav
 