import React from "react";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";

const Topbar = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <header className="admin-topbar">

            {/* Search */}
            <div className="topbar-search">

                <FaSearch />

                <input
                    type="text"
                    placeholder="Search..."
                />

            </div>


            {/* Right Section */}
            <div className="topbar-right">

                <button
                    type="button"
                    className="cx-theme-toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                    title={`Switch to ${darkMode ? "light" : "dark"} mode`}
                >
                    <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
                    <span>{darkMode ? "Light" : "Dark"}</span>
                </button>

                {/* Notification */}
                <div className="topbar-icon">
                    <FaBell />
                    <span className="notification-dot"></span>
                </div>


                {/* Admin Profile */}
                <div className="admin-profile">

                    <FaUserCircle size={32} />

                    <div className="profile-info">

                        <h4>
                            Admin
                        </h4>

                        <span>
                            Administrator
                        </span>

                    </div>

                </div>


            </div>


        </header>
    );
};


export default Topbar;