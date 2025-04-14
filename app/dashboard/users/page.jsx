
'use client'

import { useState, useEffect } from 'react';
import styles from "../../ui/dashboard/users/users.module.css";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://mapazzz.vercel.app/profiles');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Spinner size="lg" label="Carregando..." />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>Usuários</h1>
      </div>
      <div className={styles.grid}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <div className={styles.userImageContainer}>
              <Image 
                src={user.avatar || "/noavatar.png"} 
                alt="" 
                fill 
                className={styles.userImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.userDetails}>
              <span className={styles.username}>{user.name}</span>
              <span className={styles.userEmail}>{user.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
