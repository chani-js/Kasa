import '../css/propos.css'
import React from 'react'

class  Apropos extends React.Component {
    handleclick(e,classname){
        const element = document.getElementsByClassName(classname)[0]
            element.classList.toggle("active")
            e.target.classList.toggle("fas-active")
            

    }
    

render(){

    return  <div className="container-principal">
                <div className="img-propos">
                    <img src="propos.png" alt="propos"></img> 
                </div>
                <div className="container-margin">
                    <div className="container-bloc">
                        <div className="titre">Fiabilité <i class="fas fa-chevron-up" onClick={(e)=>this.handleclick(e,"fiabilite")}> </i></div>
                        <p className="fiabilite">Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements, et toutes les informations 
                        sont régulièrement vérifiées par nos équipes.</p>
                    </div>
                    <div className="container-bloc">
                        <div className="titre ">Respect <i class="fas fa-chevron-up" onClick={(e)=>this.handleclick(e,"respect")}></i></div>
                        <p className="respect"> La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme.</p>
                    </div>
                    <div className="container-bloc">
                        <div className="titre ">Service <i class="fas fa-chevron-up" onClick={(e)=>this.handleclick(e,"service")}></i></div>
                        <p className="service">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                        N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                    <div className="container-bloc">
                        <div className="titre">Responsabilité <i class="fas fa-chevron-up" onClick={(e)=>this.handleclick(e,"responsabilite")}></i></div>
                        <p className="responsabilite">La sécurité est la priorité de Kasa. 
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