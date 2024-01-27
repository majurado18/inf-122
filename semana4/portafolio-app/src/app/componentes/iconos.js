"use client"
import Image from "next/image";
import style from "./iconos.module.css";
import { useEffect, useState } from "react";

function Iconos(){
    return(
        <div className={style.iconuno}>
                        <div className={style.icon}>
                            <a href="https://github.com/majurado18">
                                <Image src="/image/github.png" alt="Picture of the author"width={50} height={50}/>
                            </a>
                            <a href="https://es.linkedin.com/">
                                <Image src="/image/linkedin.png" alt="Picture of the author"width={50} height={50}/>
                            </a>
                            <a href="https://x.com/MAlexandraJV1?t=z63gEl-Sy-kUiSsaM-CMOw&s=09">
                                <Image src="/image/twitter.png" alt="Picture of the author"width={50} height={50}/>
                            </a>
                            <a href="https://youtube.com/@mayajuradoveizan8699?si=MvDfl20YjojezU9C">
                            <Image src="/image/youtube.png" alt="Picture of the author"width={50} height={50}/>
                            </a>
                        </div>
                    </div>
    );
}

export default Iconos;