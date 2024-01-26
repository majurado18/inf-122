import Image from "next/image";
import styles from "./page.module.css";
import Foto from "./componentes/pokemon"

function pokemon() {
  return (
    <div className={styles.main}>
      <Foto/>
      
    </div>
  );
}
export default pokemon;