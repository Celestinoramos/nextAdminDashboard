
"use client";
import styles from "../../ui/dashboard/users/users.module.css";
import Image from "next/image";

const UsersPage = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      avatar: "/noavatar.png"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/noavatar.png"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>Usuários</h1>
      </div>
      <div className={styles.grid}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <div className={styles.userImageContainer}>
              <Image src={user.avatar} alt="" fill className={styles.userImage} />
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
