import React from "react";
import { NavLink } from "react-router-dom";

import {
    FaTachometerAlt,
    FaMotorcycle,
    FaCar,
    FaUsers,
    FaShoppingCart,
    FaClipboardList,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

const Sidebar = () => {

    const menuItems = [
        {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: <FaTachometerAlt />
        },
        {
            name: "Bikes",
            path: "/admin/bikes",
            icon: <FaMotorcycle />
        },
        {
            name: "Cars",
            path: "/admin/cars",
            icon: <FaCar />
        },
        {
            name: "Customers",
            path: "/admin/customers",
            icon: <FaUsers />
        },
        {
            name: "Orders",
            path: "/admin/orders",
            icon: <FaShoppingCart />
        },
        {
            name: "Bookings",
            path: "/admin/bookings",
            icon: <FaClipboardList />
        },
        {
            name: "Settings",
            path: "/admin/settings",
            icon: <FaCog />
        }
    ];


    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("isLoggedIn");
        window.location.replace("/login");
    };


    return (
        <aside className="admin-sidebar">

            {/* Logo */}
            <div className="sidebar-logo">
                <h2>
                    🚗 CarXpress
                </h2>
                <span>Admin Panel</span>
            </div>


            {/* Menu */}
            <nav className="sidebar-menu">

                {
                    menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link active"
                                    : "sidebar-link"
                            }
                        >

                            <span className="sidebar-icon">
                                {item.icon}
                            </span>

                            <span>
                                {item.name}
                            </span>

                        </NavLink>
                    ))
                }


            </nav>


            {/* Logout */}
            <button
                className="logout-btn"
                onClick={handleLogout}
            >

                <FaSignOutAlt />

                Logout

            </button>


        </aside>
    );
};


export default Sidebar;