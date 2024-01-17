import logo from './logo.svg';
import './App.css';
import './style/Evento.css';
import Evento from './components/Evento.js';
import EventoB from './components/EventoB.js';
import EventoC from './components/EventoC.js';

function App() {
  return (
    <div className="App">
      <Evento />
      <EventoB 
        title="Py Pizza 03 - PyPuzzle"
        image="des"
        dateLiteral="09 de Diciembre de 2023 - 13:30 GMT-4"
        placeLiteral="Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia"
        description="¡Hola Pythonista!
        Participa en este Evento Presencial de la comunidad Python La Paz
        ¿Cuánto conoces de Python?
        Aprende a trabajar en equipo resolviendo increíbles acertijo
        ¡Anímate a ser parte de esta actividad!"
        holi="holi"/>
        <EventoC
         title="MeetUp 11 - 3 Pitfalls de la ingieneria"
         image="des"
         dateLiteral="25 de noviembre de 2003"
         placeLiteral="Online"
         description="¡Hola Pythonista!
         Acompáñanos al MeetUp mensual de la comunidad Python La Paz
         
         En este MeetUp tendremos la participación de Valery Calderon Briz, Ingeniera en Telecomunicaciones actualmente trabajando como Ingeniera de datos Senior en One.Five
         Anteriormente Co-organizadora de Pyladies MX y Líder de la comunidad Python Guatemala
         ha impartido conferencias y talleres en diversas PyCon en múltiples países.
         
         En esta charla Valery nos presentara: 3 Pitfalls de la Ingeniería de datos (donde no meter la pata)
         Resumen: Cuando implementamos flujos de datos es muy común olvidar algunos detalles de diseño sumamente importantes para el buen funcionamiento de los procesos. En esta charla hablaremos de 3 de los más importantes y cuales son las implicaciones de implementarlos o no implementarlos."
      
        />
    </div>
  );
}

export default App;
