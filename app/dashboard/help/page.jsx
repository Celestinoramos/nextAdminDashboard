
"use client";

import styles from "../../ui/dashboard/help/help.module.css";

const HelpPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>Central de Ajuda</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <h3>Perguntas Frequentes</h3>
          <div className={styles.faqItem}>
            <h4>Como adicionar um novo relato?</h4>
            <p>Navegue até a seção de relatos e clique no botão "Adicionar Novo Relato". Preencha todas as informações necessárias e clique em salvar.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Como gerenciar usuários?</h4>
            <p>Na seção de usuários, você pode visualizar, adicionar, editar ou remover usuários do sistema. Todas as alterações são registradas automaticamente.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Como gerar relatórios?</h4>
            <p>Acesse a seção de relatórios, selecione o período desejado e o tipo de relatório que deseja gerar. O sistema processará as informações automaticamente.</p>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Suporte</h3>
          <p>Precisa de ajuda adicional? Entre em contato com nossa equipe de suporte:</p>
          <a href="mailto:suporte@mapazzz.com" className={styles.button}>
            Contatar Suporte
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
