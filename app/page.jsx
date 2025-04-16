import Link from "next/link";
import Image from "next/image";
import styles from "./ui/homepage.module.css";
import { LuUsers } from "react-icons/lu";
import { TbMap2 } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";

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
            Uma solução completa para gerenciar relatos de zonas de risco,
            usuários e notificações de forma eficiente, segura e em tempo real.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/dashboard" className={styles.primaryButton}>
              Começar Agora
            </Link>
            <Link href="/saiba-mais" className={styles.secondaryButton}>
              Saiba Mais
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.markerIcon}>
            <Image
              src="/logoTrans.png"
              alt="Marker Icon"
              width={300}
              height={400}
              priority
            />
          </div>
        </div>
      </main>

      <section className={styles.downloadSection}>
        <div className={styles.downloadContent}>
          <h2>Baixe Nosso Aplicativo</h2>
          <p>Disponível para iOS e Android</p>
          <div className={styles.downloadButtons}>
            <a
              href="https://apps.apple.com/app/mapazzz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              <Image src="/app-store.png" alt="App Store" width={160} height={50} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mapazzz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              <Image src="/photopea1.png" alt="Play Store" width={160} height={50} />
            </a>
          </div>
        </div>
        <div className={styles.phoneContainer}>
          <Image
            src="/phone-mockup.png"
            alt="App Preview"
            width={300}
            height={600}
            className={styles.phoneImage}
          />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Pronto para começar?</h2>
        <p>
          Simplifique a gestão de zonas de risco da sua comunidade ou
          organização e tenha mais controle e segurança para proteger o que
          realmente importa.
        </p>
        <Link href="/dashboard" className={styles.ctaButton}>
          Acessar o Dashboard
        </Link>
      </section>
    </div>
  );
};

export default Homepage;