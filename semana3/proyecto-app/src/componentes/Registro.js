import React, { useState } from 'react';
import Login from './Boton';
import '../style/Registro.css';
import Boton from './Boton';
import { click } from '@testing-library/user-event/dist/click';


function Registro() {
 
    return (
        <div className='contenedor-principal'>
            <form>
                <div className='nombre'>
                    <label>Nombre:</label>
                    <input className="input" type="text" placeholder='ingresar nombre'></input>
                </div>
                <div className='apellido'>
                    <label>Apellido:</label>
                    <input className="input" type="text" placeholder='ingresar Apellido'></input>
                </div>
                <div className='contraseña'>
                    <label>Contraseña:</label>
                    <input className="input" type="text" placeholder='ingresar contraseña'></input>
                </div>
            </form>
            <div className='botones'>
                <Boton funClick={()=> click("Login") } text="Registro"/>
            </div>
            
        </div>
    );
}

export default Registro;