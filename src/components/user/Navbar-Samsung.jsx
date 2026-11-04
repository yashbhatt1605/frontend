import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    FaBars,
    FaTimes,
    FaSearch,
    FaShoppingCart,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const handleLogout = () => {
        localStorage.removeItem("role");
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    const navLinks = [
        { name: "Home", path: "/home" },
        { name: "Cars", path: "/cars" },
        { name: "Bikes", path: "/bikes" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-black/90 backdrop-blur-lg shadow-xl z-50">

            <div className="max-w-7xl h-full mx-auto flex items-center justify-between px-6">

                {/* Logo */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        to="/home"
                        className="text-3xl font-extrabold"
                    >
                        <span className="text-gray-300">Car</span>
                        <span className="text-white">Xpress</span>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-8">

                    {navLinks.map((item) => (

                        <Link
                            key={item.name}
                            to={item.path}
                            className={`font-medium transition duration-300 relative ${location.pathname === item.path
                                ? "text-gray-300"
                                : "text-white hover:text-gray-300"
                                }`}
                        >
                            {item.name}
                        </Link>

                    ))}

                </nav>

                {/* Right Side */}
                <div className="hidden lg:flex items-center gap-6">

                    <FaSearch className="text-white hover:text-gray-300 cursor-pointer text-lg" />

                    <FaShoppingCart className="text-white hover:text-gray-300 cursor-pointer text-lg" />

                    {role ? (
                        <button
                            onClick={handleLogout}
                            className="bg-gray-700 text-white px-5 py-2 rounded-sm font-semibold hover:bg-gray-600 transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-white text-black px-5 py-2 rounded-sm font-semibold hover:bg-gray-200 transition"
                        >
                            Login
                        </Link>
                    )}

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-white text-2xl"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden bg-black border-t border-gray-700"
                >

                    {navLinks.map((item) => (

                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="block px-6 py-4 text-white hover:bg-gray-200 hover:text-black transition"
                        >
                            {item.name}
                        </Link>

                    ))}

                    {role ? (
                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                handleLogout();
                            }}
                            className="block w-[calc(100%-2rem)] text-center bg-red-500 text-white font-semibold py-3 m-4 rounded-full hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="block text-center bg-yellow-400 text-black font-semibold py-3 m-4 rounded-full"
                        >
                            Login
                        </Link>
                    )}

                </motion.div>

            )}

        </header>
    );
};

export default Navbar;