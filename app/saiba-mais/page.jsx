
"use client";

import styles from "../ui/saiba-mais/saiba-mais.module.css";
import Link from "next/link";

const SaibaMaisPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Como Funciona o Sistema</h1>
        <p className={styles.description}>
          Nossa plataforma oferece ferramentas completas para administrar todos
          os aspectos relacionados a zonas de risco, usuários e alertas em sua
          comunidade ou organização.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Gestão de Usuários</h3>
            <p>
              Cadastre e gerencie colaboradores e administradores com
              informações detalhadas, como nome, permissões, status da conta e
              localização residencial.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Registro de Relatos</h3>
            <p>
              Registre facilmente relatos de zonas de risco, incluindo nível de
              criticidade, localização geográfica e imagens, com histórico
              completo de alterações.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Relatórios Detalhados</h3>
            <p>
              Gere relatórios completos sobre relatos, usuários e zonas de risco
              para acompanhar tendências e facilitar a tomada de decisão.
            </p>
          </div>
        </div>

        <Link href="/" className={styles.backButton}>
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default SaibaMaisPage;
