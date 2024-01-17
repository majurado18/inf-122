import './App.css';

import{useState} from 'react';
import Boton from './Componentes/Boton.js';
import Contador from './Componentes/Contador.js';

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
    <div className="App">
      <div className="contenedor-principal">
        <div className='contenedor-botones'>
          <Contador nroClicks={nroClicks} />
          <div className='contendedor-botones'>
            <div className='contenedor-botones-principal'>
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
            <Boton/>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
