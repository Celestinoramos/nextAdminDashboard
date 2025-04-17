"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  const getTitleInPortuguese = (path) => {
    const titles = {
      'dashboard': 'Painel',
      'users': 'Usuários',
      'reports': 'Relatórios',
      'settings': 'Configurações',
      'help': 'Ajuda'
    };
    const pathSegment = path.split("/").pop();
    return titles[pathSegment] || pathSegment;
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{getTitleInPortuguese(pathname)}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;