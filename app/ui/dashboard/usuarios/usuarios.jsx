import { LuUsers } from "react-icons/lu";
import styles from "./usuarios.module.css";

const User = ({ item }) => {
  return (
    <div className={styles.container}>
      <LuUsers size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Toatal de Usuarios</span>
        <span className={styles.number}>00</span>
        <span className={styles.detail}>test</span>
      </div>
    </div>
    
  );
};

export default User;