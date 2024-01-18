import React from 'react';
import '../style/Notas.css';
function Nota({ nota }) {
    
   

    return (
        <div>
            <div className='contenedor-nota'>
                <ul>
                <li className='nota'>{nota.texto}</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Nota;