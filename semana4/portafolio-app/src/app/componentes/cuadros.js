"use client"
import Image from "next/image";
import style from "./portafolio.module.css";

function Cuadros(){
    return(
        
        <div class={style.cajaCuatroo}>
            <div className={style.imf}>    
                <div className={style.imf}>
                    <Image src="/image/primer-par.jpg" alt="Picture of the author"width={500} height={500}/>
                </div>
                <div className={style.imf}>
                    <Image src="/image/primer-parc.jpg" alt="Picture of the author"width={500} height={500}/>
                </div>
                <div className={style.imf}>
                    <Image src="/image/segundo-par.jpg" alt="Picture of the author"width={500} height={500}/>
                </div>
                <div className={style.imf}>
                    <Image src="/image/segundo-par.jpg" alt="Picture of the author"width={500} height={500}/>
                </div>
            </div>
        </div> 
    );
}
export default Cuadros;