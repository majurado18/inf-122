"use client"

import style from "./boton.module.css";
import { useEffect, useState } from "react";

function Boton(){
    const Download=()=>{
        alert("Descargando Archivo")
    }

    return(
        <div className={style.button}>
            <div className={style.download} >
                <button className={style.boton} onClick={Download}>Download</button>
            </div>
            <div className={style.medio}>
            </div>
            <div className={style.Contac}>
                <button> Contact me</button>
            </div>
            
        </div>
    );
}
export default Boton;