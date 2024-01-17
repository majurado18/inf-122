import React, {useState} from 'react';

function Nota(nota, onEdit, onDelete){
    return(
        <div>
            <p className='nota'>{nota}</p>
            <button onClick={onEdit}>Editar</button>
            <button onClick={onDelete}>Eliminar</button>
        </div>
    );
}
export default Nota;