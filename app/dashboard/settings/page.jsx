
"use client";

import styles from "../../ui/dashboard/settings/settings.module.css";

const SettingsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>Configurações</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <h3>Configurações do Perfil</h3>
          <div className={styles.item}>
            <label>Idioma</label>
            <select defaultValue="pt">
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          <div className={styles.item}>
            <label>Tema</label>
            <select defaultValue="dark">
              <option value="dark">Escuro</option>
              <option value="light">Claro</option>
            </select>
          </div>
          <button className={styles.button}>Salvar Alterações</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
