import React from "react";
import Boton from "./Boton";
function Perfil(){
    const click =(x)=>{
        console.log("x");
      }
    return (
        <div className='contenedor-principal'>
            <form>
                <div className='nombre'>
                    <label>Nombre:</label>
                    <input className="input" type="text" placeholder='ingresar nombre'></input>
                </div>
                <div className='apellido'>
                    <label>Apellido:</label>
                    <input className="input" type="text" placeholder='ingresar apellido'></input>
                </div>
                <div className='contraseña'>
                    <label>Contraseña:</label>
                    <input className="input" type="text" placeholder='********'></input>
                </div>
            </form>
            <div className='botones'>
                <Boton funClick={()=> click("Login") } text="Login"/>
                <Boton funClick={()=> click("Ingresar") } text="Ingresar"/>
            </div>
        </div>
    );    
}
export default Perfil;