import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Layout() {

    return (
        <section className="relative">
                <Navbar />
            <div className="h-fit mt-[4rem]">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </section>
    )
}

export default Layout