import React, { useState } from 'react';
import Nota from './Nota';
import '../style/Login.css';
import Boton from './Boton';
import { click } from '@testing-library/user-event/dist/click';

function Login() {
    const click =(x)=>{
        console.log("x");
      }
    return (
        <div className='contenedor-principal'>
          <form>
                <div className='usuario'>
                    <label>Usuario:</label>
                    <input className="input" type="text" placeholder='ingresar usuario'></input>
                </div>
                <div className='contraseña'>
                    <label>Contraseña:</label>
                    <input className="input" type="text" placeholder='ingresar contraseña'></input>
                </div>
            </form>
            <div className='botones'>
                <Boton funClick={()=> click("Login") } text="Login"/>
                <Boton funClick={()=> click("Ingresar") } text="Ingresar"/>
            </div>
        </div>
    );
}

export default Login;