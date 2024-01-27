
import styles from "./page.module.css";
import Portafolio from "./componentes/portafolio"
import Datos from "./componentes/datos"
import Boton from "./componentes/boton"
import Habilidades from "./componentes/habilidades"
import Cuadros from "./componentes/cuadros"
import Iconos from "./componentes/iconos"

export default function Home() {
  return (
    <div className={styles.main}>
      <Portafolio/>
      <Iconos/>
      <Datos/>
      <Boton/>
      <Habilidades/>
      <Cuadros/>
    </div>
  );
}
