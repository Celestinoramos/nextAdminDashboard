
import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Prevenção Contra Malária</span>
          <h3 className={styles.title}>
            Como se proteger contra a malária?
          </h3>
          <span className={styles.subtitle}>Medidas essenciais de prevenção</span>
          <p className={styles.desc}>
            Use repelentes, mosquiteiros e elimine água parada. Mantenha janelas e portas fechadas durante o entardecer.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Saiba mais
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>Sintomas da Malária</span>
          <h3 className={styles.title}>
            Reconheça os sintomas iniciais da malária
          </h3>
          <span className={styles.subtitle}>Procure atendimento médico</span>
          <p className={styles.desc}>
            Febre alta, calafrios, dores musculares e fadiga são sintomas comuns. Não ignore estes sinais.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Ler mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
