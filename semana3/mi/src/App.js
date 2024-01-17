import './App.css';
import Nota from './componentes/Nota';

function App() {
  const onDelete = () =>{
    console.log("Eliminar");
  }
  const onEdit = () =>{
    console.log("Editar");
  }
  return (
    <div className='App'>
      <Nota/>
    </div> 
  );
}

export default App;
