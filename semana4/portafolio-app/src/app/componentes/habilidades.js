"use client"
import Image from "next/image";
import style from "./habilidades.module.css";
import { useEffect, useState } from "react";

function Habilidades(){
    return(
        <div class={style.skills}>
            <div class={style.port}>
                <p>Portafolio</p>
            </div>
            <div class={style.ski}>
                <p>Skills</p>
            </div>
        </div>
    );
}

export default Habilidades;