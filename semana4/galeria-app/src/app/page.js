import Image from "next/image";
import styles from "./page.module.css";
import Foto from "./componentes/foto"

export default function Home() {
  return (
    <div className={styles.main}>
      <Foto/>
      <Foto/>
      <Foto/>
      <Foto/>
      <Foto/>
      <Foto/>
    </div>
  );
}
