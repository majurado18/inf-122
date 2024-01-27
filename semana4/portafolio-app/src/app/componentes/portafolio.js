"use client"
import Image from "next/image";
import style from "./portafolio.module.css";
import { useEffect, useState } from "react";

function Portafolio(){

    return(
        <div className={style.cajaUnoo}>
            <div className={style.caji}>
                    <div className={style.im}>
                    <Image src="/image/imagenn.jpg" alt="Picture of the author"width={500} height={500}/>
                    </div>
                    <div className={style.caja}>
                        <h1>Maya Jurado</h1>
                        <p>Junior Junior</p>
                    </div>
            </div>
            
    </div>
    );
}
export default Portafolio;