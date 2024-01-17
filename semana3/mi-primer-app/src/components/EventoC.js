import React from "react";
import "../style/Eventos.css";

function EventoC({image,title, dateLiteral, palceLiteral, description}) {
    return(
        <div className="card-container">
            <img className="card-image"
                src={require()} alt=""
             />
             <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-date">{dateLiteral}</p>
                <p className="card-date">{dateLiteral}</p>
                {description.map((line, index) => (<p className="cafrd-description">{line}</p>))}
             </div>
        </div>
    );
}
export default EventoC;