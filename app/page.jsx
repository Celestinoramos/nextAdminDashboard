
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
    </div>
  )
}

export default Homepage
