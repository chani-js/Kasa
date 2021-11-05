
const PageNotFound=()=>{
    return  <div className="error-container">
                <div className="error">404</div>
                <div className="message">Oups! la page que vous demandez n'existe pas.</div>
                <link to="/" className="link">Retourner sur la page d'accueil</link>
            </div>
} 
export default PageNotFound