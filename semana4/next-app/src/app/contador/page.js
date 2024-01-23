'use client';
import style from'./page.modulo.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import{useState} from 'react';

function App() {
  const[nroClicks, setNumClicks] = useState(0);
  const clickMenos3 =() =>{
    setNumClicks(nroClicks - 3);
    console.log("click");
  }
  const clickMas3 =() =>{
    setNumClicks(nroClicks + 3);
    console.log("click");
  }
  const clickMenos1 =() =>{
    setNumClicks(nroClicks - 1);
    console.log("click");
  }
  const clickMas1 =() =>{
    setNumClicks(nroClicks + 1);
    console.log("click");
  }
  const click =() =>{
    setNumClicks(nroClicks + 1);
    console.log("click");
  }
  const reiniciar =() =>{
    setNumClicks(0);
    console.log("reiniciar");
  }
  return (
    <div className={style.App}>
      <div className={style['contenedor-principal']}>
        <div className={style['contenedor-botones']}>
          <Contador nroClicks={nroClicks} />
          <div className={style['contendedor-botones']}>
            <div className={style['contenedor-botones-principal']}>
              <Boton texto="-3" esBotonClick={true}
                funcionClick={clickMenos3} />
              <Boton texto="+3" esBotonClick={true}
                funcionClick={clickMas3} />
              <Boton texto="-1" esBotonClick={true}
                funcionClick={clickMenos1} />
              <Boton texto="+1" esBotonClick={true}
                funcionClick={clickMas1} />
            </div>
            <Boton texto="Reiniciar" esBotonClick={false}
              funcionClick={reiniciar} />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;