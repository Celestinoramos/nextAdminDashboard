
import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}> Ultimas Reportagens</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Estado</td>
                        <td>Data</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Teste00
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pendente
                            </span>
                        </td>
                        <td>12.04.2025</td>
                    </tr>
                    <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Test01
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Finalizada</span>
            </td>
            <td>12.04.2025</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Test02
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelado
              </span>
            </td>
            <td>12.04.2025</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Test03
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendente
              </span>
            </td>
            <td>12.04.2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;