import { Link } from "react-router-dom"
import './css/nav.css'
import React from 'react'

class Nav extends React.Component{
   render(){
      return <div className="topnav">
               <h1 className="logo-nav">K<img className="logo" src="/vector.png" alt="logo"/>sa</h1>
                  <div className="link">
                     <Link to="/" className="accueil">Accueil</Link>
                     <Link to="/apropos" className="apropos">A propos</Link>
                  </div>
             </div>
   }
}

 export default Nav
 