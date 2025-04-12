import { FiMapPin } from "react-icons/fi";
import styles from "./zonas.module.css";

const Zonas = ({ item }) => {
  return (
    <div className={styles.container}>
      <FiMapPin size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total de Zonas</span>
        <span className={styles.number}>00</span>
        <span className={styles.detail}>test</span>
      </div>
    </div>
    
  );
};

export default Zonas;