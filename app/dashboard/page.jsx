import Chart from "../ui/dashboard/chart/chart"
import styles from "../ui/dashboard/dashboard.module.css"
import Rightbar from "../ui/dashboard/rightbar/rightbar"
import Transactions from "../ui/dashboard/transactions/transactions"
import Zonas from "../ui/dashboard/zonas/zonas"
import Colabs from "../ui/dashboard/colabs/colabs"
import User from "../ui/dashboard/usuarios/usuarios"

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <User/>
                    <Zonas/>
                    <Colabs/>
                </div>
                <Transactions/>
                <Chart/>
            </div>
            <div className={styles.side}>
                <Rightbar/>
            </div>
        </div>
    )
}

export default Dashboard