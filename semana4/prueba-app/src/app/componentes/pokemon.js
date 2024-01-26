"use client"
import Imagen from "next/image";
import style from "./pokemon.module.css";
import { useEffect, useState } from "react";

function Pokemon(){
    const[poke, setPerrito]=useState("/vercel.svg");
    const[poder, setPoder]=useState("poder");
    const[estadistica, setEstadistica]=useState("esperando");
    const[nombre, setNombre]=useState("nombre");
    const[rendimiento, setRendimiento]=useState("rend");
    const[movimiento, setMovimiento]=useState("movi");
    const[tipos, setTipos]=useState("tipo");
    const[evaluacion, setEvaluacion]=useState("eval");
    const url="https://pokeapi.co/api/v2/pokemon/jigglypuff";
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{setPerrito(data.sprites.front_default)
        setPoder(data.abilities[1].ability.name)
        setEstadistica(data.game_indices[0].game_index)
        setNombre(data.forms[0].name)
        setRendimiento(data.held_items[0].item.name)
        setMovimiento(data.moves[0].move.name)
        setTipos(data.past_types[0].generation.name)
        setEvaluacion(data.stats[0].base_stat)
        })
    },[])
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.poke}>
                    <Imagen src={poke} alt="dog" width={250} height={250}/>
                </div>
                <div className="infor">
                        <h1>{nombre}</h1>
                        <h1>{estadistica}</h1>
                        <h1>{poder}</h1>
                        <h1>{rendimiento}</h1>
                        <h1>{movimiento}</h1>
                        <h1>{tipos}</h1>
                        <h1>{evaluacion}</h1>
                </div>
            </div>
            
        </div>
    );
}
export default Pokemon;