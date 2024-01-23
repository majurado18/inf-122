import React from 'react';
import style from './Contador.modulo.css';

function Contador({ nroClicks, mostrar }) {
    return (
         <div className={style.contador}>{nroClicks}
        
        </div>
    );
}

export default Contador;