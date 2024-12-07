import { Link } from 'react-router-dom'
import logo from '../assets/loncy_logo.svg'

function Footer() {

    return (


        <footer className="bg-white rounded-lg m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 w-[3rem] rtl:space-x-reverse">
                        <img src={logo} className="h-[3rem]" alt="Loncy" />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/about" className="text-black hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-black hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer