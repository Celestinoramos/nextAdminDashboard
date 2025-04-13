
import Link from 'next/link'
import Image from 'next/image'
import styles from './ui/homepage.module.css'

const Homepage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>MapaZZZ</div>
        <div className={styles.buttons}>
          <Link href="/login" className={styles.loginButton}>
            Entrar
          </Link>
          <Link href="/dashboard" className={styles.dashboardButton}>
            Dashboard
          </Link>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Sistema de Gestão de Zonas de Risco</h1>
          <p className={styles.description}>
            Uma solução completa para gerenciar relatos de zonas de risco, usuários e notificações de forma eficiente, segura e em tempo real.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/dashboard" className={styles.primaryButton}>
              Começar Agora
            </Link>
            <button className={styles.secondaryButton}>Saiba Mais</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.markerIcon}>
            <Image 
              src="/mosquito-marker.png" 
              alt="Marker Icon" 
              width={300} 
              height={300}
              priority
            />
          </div>
        </div>
      </main>

      <section className={styles.stepsSection}>
        <h2>Passo a Passo</h2>
        <p>Passo a Passo</p>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <h3>Cadastro de Usuários</h3>
            <p>Cadastro de Usuários</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            <h3>Gestão de Relatos</h3>
            <p>Adicione, edite ou remova relatos de zonas de risco com detalhes como nível de criticidade, localização e imagens, tudo de forma rápida e segura.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>
            <h3>Geração de Relatórios</h3>
            <p>Visualize e exporte relatórios detalhados sobre usuários, relatos e zonas de risco para análise e prestação de contas.</p>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2>Como Funciona o Sistema</h2>
        <p>Nossa plataforma oferece ferramentas completas para administrar todos os aspectos relacionados a zonas de risco, usuários e alertas em sua comunidade ou organização.</p>
        
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}><LuUsers /></div>
            <h3>Gestão de Usuários</h3>
            <p>Cadastre e gerencie colaboradores e administradores com informações detalhadas, como nome, permissões, status da conta e localização residencial.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}><TbMap2 /></div>
            <h3>Registro de Relatos</h3>
            <p>Registre facilmente relatos de zonas de risco, incluindo nível de criticidade, localização geográfica e imagens, com histórico completo de alterações.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}><MdDashboard /></div>
            <h3>Relatórios Detalhados</h3>
            <p>Gere relatórios completos sobre relatos, usuários e zonas de risco para acompanhar tendências e facilitar a tomada de decisão.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Pronto para começar?</h2>
        <p>Simplifique a gestão de zonas de risco da sua comunidade ou organização e tenha mais controle e segurança para proteger o que realmente importa.</p>
        <Link href="/dashboard" className={styles.ctaButton}>
          Acessar o Dashboard
        </Link>
      </section>
    </div>
  )
}

export default Homepage
