import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  const mostrar = () => {
    setShow(!show);
  }
  return (
    <div className="App">
        <div className='contendedor-principal'>       
          <Boton texto="Mostrar/Ocultar" esBotonClick={false} funcionClick={mostrar} />
            <Contador  mostrar={show} />
          </div>  
    </div>
  );
}

export default App;