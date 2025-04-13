import { LuUsers } from "react-icons/lu";
import MenuLink from "./menuLink/menuLinks";
import styles from "./sidebar.module.css";
import Image from "next/image";
import { TbMap2 } from "react-icons/tb";
import {
  MdDashboard,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "MZ",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Usuarios",
        path: "/dashboard/users",
        icon: <LuUsers />
      },
      {
        title: "Zonas Reportadas",
        path: "/dashboard/reports",
        icon: <TbMap2 />
      },
      {
        title: "Colaboradores",
        path: "/dashboard/colabs",
        icon: <LuUsers />
      },
      {
        title: "Definicoes",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />
      },
      {
        title: "Ajuda",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MZ</div>
      <ul className={styles.list}>
        {menuItems[0].list.map((item) => (
          <MenuLink item={item} key={item.title} />
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
      </button>
    </div>
  );
};

export default Sidebar;