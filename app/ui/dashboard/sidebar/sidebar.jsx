import MenuLink from "./menuLink/menuLinks";
import styles from "./sidebar.module.css" ;
import Image from "next/image"; 
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";

 const menuItems = [
    {
        title: "Pages",
        list: [
            {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />
            },
            {
                title:"Usuarios",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
        ],
    },
    {
        title: "Analises",
        list: [
            {
                title: "Zonas Reportadas",
                path: "/dasboard/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Colaboradores",
                path: "/dashboard/colabs",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
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

const Sidebar = async () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Celestino Cumbica</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
               {menuItems.map((cat)=> (
                <li key={cat.title}>
                <span className={styles.cat}>{cat.title}</span>
                {cat.list.map((item)=> (
                    <MenuLink item={item} key={item.title} />
                ))}
                </li>
               ))}
            </ul>
            </div>
    );
}

export default Sidebar;