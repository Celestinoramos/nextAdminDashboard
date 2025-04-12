import { LuUsers } from "react-icons/lu";
import styles from "./colabs.module.css";

const Colabs = ({ item }) => {
  return (
    <div className={styles.container}>
      <LuUsers size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total de Colaboradores</span>
        <span className={styles.number}>00</span>
        <span className={styles.detail}>test</span>
      </div>
    </div>
    
  );
};

export default Colabs;