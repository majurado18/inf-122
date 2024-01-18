import './App.css';
import { useState } from 'react';
import Listanotas from './componentes/Listanotas';


function App() {
  const TuComponente = () => {
    const [tarea, setTarea] = useState('');
    const [lista, setLista] = useState([]);
  
    const agregarTarea = () => {
      if (tarea.trim() !== '') {
        setLista([...lista, tarea]);
        setTarea('');
      }
    };
  
    return (
      <div>
        <h1>Lista de Tareas</h1>
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
  
        <ul>
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
        
  return (
    <div className="App">
      <Listanotas />
      
    </div>
  );
}

export default App;