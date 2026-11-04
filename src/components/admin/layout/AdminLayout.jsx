import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import "../../../Styles/admin.css";

const AdminLayout = () => {
    return (
        <div className="admin-layout">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Area */}
            <div className="admin-main">

                {/* Top Header */}
                <Topbar />

                {/* Page Content */}
                <main className="admin-content">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default AdminLayout;