import Image from "next/image";
import Dog from "./componentes/dogs";
import styles from "./page.module.css";

function dogs() {
  return (
    
    <main className={styles.main}><Dog/>
    </main>
  );
}
export default dogs;