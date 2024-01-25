"use client"
import Imagen from "next/image";
import style from "./foto.module.css";
import { useEffect, useState } from "react";

function Foto(){
    const [perrito,setPerrito]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [habilidad, setHabilidad]=useState("habi");
    const [estadisticas, setEstadisticas]=useState("est");
    const url="https://pokeapi.co/api/v2/pokemon/snorlax";
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{setPerrito(data.sprites.front_default),
        setEstado(data.species.name) 
        setHabilidad(data.abilities[0].ability.name) 
        setEstadisticas(data.stats[0].base_stat)  
        });
    },[]);
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <h1>{habilidad}</h1>
            <h1>{estadisticas}</h1>
            <Imagen src={perrito} alt="dog" width={250} height={250}/>
        </div>
    );
}
export default Foto;