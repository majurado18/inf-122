import '../style/Boton.css';

function Boton({ texto, esBotonClick, funcionClick }) {
 
    return (
        <button className={esBotonClick ? "boton-click" : "Start"}
            onClick={funcionClick}>
            {texto}
        </button>

    );
}

export default Boton;