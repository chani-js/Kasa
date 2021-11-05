


function Entete(){
   return <div className="pics"></div>
}
ReactDOM.render(<Entete />, document.getElementById('title'))

function Cards(){
   const cards = [1,2,3,4,5,6,7,8,9]
   return   <div>{cards.map(card=>( 
               <div className="card">
                  <div className="title-card">Location {card}</div>
               </div>
               )) }    
            </div> 
}
ReactDOM.render(<Cards />, document.getElementById('cards'))