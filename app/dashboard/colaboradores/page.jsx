
"use client";
import { useEffect, useState } from "react";
import styles from "../../ui/dashboard/users/users.module.css";
import Image from "next/image";

const ColaboradoresPage = () => {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const res = await fetch("https://api-mapp-zzz.vercel.app/api/colaboradores");
        const data = await res.json();
        setColaboradores(data);
      } catch (error) {
        console.error("Error fetching colaboradores:", error);
      }
    };

    fetchColaboradores();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>Colaboradores</h1>
      </div>
      <div className={styles.grid}>
        {colaboradores.map((colab) => (
          <div key={colab.id} className={styles.card}>
            <div className={styles.userImageContainer}>
              <Image src={colab.avatar || "/noavatar.png"} alt="" fill className={styles.userImage} />
            </div>
            <div className={styles.userDetails}>
              <span className={styles.username}>{colab.name}</span>
              <span className={styles.userEmail}>{colab.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColaboradoresPage;
