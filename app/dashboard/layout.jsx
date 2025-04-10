import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"

const Layout = ({Children}) => {
    return (
        <div>
            <div>
                <Sidebar/>
            </div>

            <div>
                <Navbar/>
                {Children}
            </div>

        </div>
    )
}

export default Layout