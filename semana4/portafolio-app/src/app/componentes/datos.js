"use client"
import style from "./datos.module.css";

function Datos(){

    return(
        <div className={style.cajaUnoo}>
            
            <div className={style.cajaDoss}>
                <div className={style.cajatres}>
                    <p>2</p>
                    <p>Years of Wark</p>
                    <p>experience</p>
                </div>
                <div className={style.cajatres}>
                    <p>3</p>
                    <p>Completed</p>
                    <p>proyects</p>
                </div>
                <div className={style.cajatres}>
                    <p>1</p>
                    <p>computer science </p>
                    <p>student</p>
                </div>
            </div>
                 
        </div>
    );
}
export default Datos;