import { Outlet, useLocation } from "react-router-dom"
import Breadcrumps from "../components/Breadcrumps"

function Services() {
    const location = useLocation()
    const loc = location.pathname.toString().split('/')[2]

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    return (
        <section className="">
            <div className="w-full relative flex justify-center">
                <Breadcrumps url={capitalizeFirstLetter(loc)}/>
            </div>
            <section>
                <Outlet />
            </section>
        </section>
    )
}

export default Services