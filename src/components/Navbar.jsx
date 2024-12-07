import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/loncy_logo.svg';
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // For mobile menu
    const [dropdownOpen, setDropdownOpen] = useState(false); // For services dropdown
    const location = useLocation()
    

    return (
        <nav className="fixed top-0 bg-transparent backdrop-blur-lg w-full z-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-[3rem]" alt="Logo" />
                </Link>
                {/* Mobile Menu Toggle */}
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-dropdown"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                <div
                    className={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`}
                    id="navbar-dropdown"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            {location.pathname === '/' && <Link
                                to="/"
                                className="block py-2 px-3 text-blue-700  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                                aria-current="page"
                            >
                                Home
                            </Link>}
                            {location.pathname !== '/' && <Link
                                to="/"
                                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:p-0"
                                aria-current="page"
                            >
                                Home
                            </Link>}
                        </li>
                        <li>
                            {/* Dropdown Button */}
                            <div
                                className="relative md:hover:bg-transparent"
                                onMouseEnter={() => !menuOpen && setDropdownOpen(true)}
                                onMouseLeave={() => !menuOpen && setDropdownOpen(false)}
                            >
                                {location.pathname.includes('services') &&
                                    <button
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 text-blue-700  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    Services
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>}
                                {!location.pathname.includes('services') &&
                                    <button
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    Services
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>}
                                {dropdownOpen && (
                                    <div
                                        id="dropdownNavbar"
                                        className="absolute md:absolute z-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                                    >
                                        <ul
                                            className="py-2 text-sm text-gray-700"
                                            aria-labelledby="dropdownLargeButton"
                                        >
                                            <li>
                                                <Link
                                                    to="services/education"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Education
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="services/branding"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Design & Branding
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="services/business"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Business Solutions
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li>
                            {location.pathname === '/about' && <Link
                                to="about"
                                className="block py-2 px-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                            >
                                About Us
                            </Link>}
                            {location.pathname !== '/about' && <Link
                                to="about"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                            >
                                About Us
                            </Link>}
                        </li>
                        <li>
                            {location.pathname === '/contact' && <Link
                                to="contact"
                                className="block py-2 px-3 text-blue-700  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                            >
                                Contact
                            </Link>}

                            {location.pathname !== '/contact' && <Link
                                to="contact"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                            >
                                Contact
                            </Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
