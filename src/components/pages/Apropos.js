import '../css/propos.css'
import React from 'react'

class  Apropos extends React.Component {

render(){
    return  <div className="container-principal">
                <div className="img-propos">
                    <img src="propos.png" alt="propos"></img> 
                </div>
                <div className="container-margin">
                    <div className="container-bloc">
                        <div className="titre">Fiabilité <i class="fas fa-chevron-up"> </i></div>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements, et toutes les informations 
                        sont régulièrement vérifiées par nos équipes.</p>
                    </div>
                    <div className="container-bloc">
                        <div className="titre">Respect</div>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme.</p>
                    </div>
                    <div className="container-bloc">
                        <div className="titre">Service</div>
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                        N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                    <div className="container-bloc">
                        <div className="titre">Responsabilité</div>
                        <p>La sécurité est la priorité de Kasa. 
                        Aussi bien pour nos hôtes que pour les voyageurs, 
                        chaque logement correspond aux critères de sécurité établis par nos services. 
                        En laissant une note aussi bien à l'hôte qu'au locataire, 
                        cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            </div>
   
} 
}
export default Apropos