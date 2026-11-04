import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "../pages/admin/Dashboard";
import Cars from "../pages/admin/Cars";
import Bikes from "../pages/admin/Bikes";
import Orders from "../pages/admin/Orders";
import Customers from "../pages/admin/Customers";
import Brands from "../pages/admin/Brands";
import Categories from "../pages/admin/Categories";
import Analytics from "../pages/admin/Analytics";
import Settings from "../pages/admin/Settings";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route
                path="/admin/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/cars"
                element={
                    <ProtectedRoute>
                        <Cars />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/bikes"
                element={
                    <ProtectedRoute>
                        <Bikes />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/orders"
                element={
                    <ProtectedRoute>
                        <Orders />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/customers"
                element={
                    <ProtectedRoute>
                        <Customers />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/brands"
                element={
                    <ProtectedRoute>
                        <Brands />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/categories"
                element={
                    <ProtectedRoute>
                        <Categories />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/analytics"
                element={
                    <ProtectedRoute>
                        <Analytics />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/settings"
                element={
                    <ProtectedRoute>
                        <Settings />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AdminRoutes;