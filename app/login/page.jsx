
'use client'

import { useState } from 'react';
import styles from '../ui/login/login.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement email/password login
  };

  const handleGoogleLogin = async () => {
    // TODO: Implement Google login
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logoContainer}>
          <Image src="/logoTrans.png" alt="Logo" width={100} height={125} />
        </div>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>
        <button onClick={handleGoogleLogin} className={styles.googleButton}>
          <Image src="https://authjs.dev/img/providers/google.svg" alt="Google" width={20} height={20} />
          Entrar com Google
        </button>
        <Link href="/register" className={styles.registerLink}>
          Não tem uma conta? Cadastre-se
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
