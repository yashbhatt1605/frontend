
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// User Components
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";

// Admin Layout
import AdminLayout from "../components/admin/layout/AdminLayout";

// Authentication Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// User Pages
import Home from "../pages/user/Home";
import Cars from "../pages/user/Cars";
import Bikes from "../pages/user/Bikes";
import CarDetails from "../pages/carD";
import BikeDetails from "../pages/bikesD";
import About from "../pages/user/About";
import Contact from "../pages/user/Contact";
import NotFound from "../pages/user/NotFound";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import AdminSettings from "../pages/admin/Settings";
import BookingOrderDetailPage from "../pages/admin/BookingOrderDetailPage";

// Admin Tables
import BikeTable from "../components/admin/tables/BikeTable";
import CarTable from "../components/admin/tables/CarTable";
import CustomerTable from "../components/admin/tables/CustomerTable";
import OrderTable from "../components/admin/tables/OrderTable";

const AppRoutes = () => {
  const location = useLocation();
  const role = localStorage.getItem("role");

  const isAdminPage = location.pathname.startsWith("/admin");

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  const showNavbar = !isAdminPage && !isAuthPage;

  const isAuthenticated = role === "user" || role === "admin";
  const isAdmin = role === "admin";

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Home */}
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Vehicle Listings */}
        <Route path="/cars" element={<Cars />} />
        <Route path="/bikes" element={<Bikes />} />

        {/* Vehicle Details */}
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/bikes/:id" element={<BikeDetails />} />

        {/* Other User Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            isAdmin ? (
              <AdminLayout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="bikes" element={<BikeTable />} />
          <Route path="cars" element={<CarTable />} />
          <Route path="customers" element={<CustomerTable />} />
          <Route path="orders" element={<OrderTable />} />
          <Route
            path="bookings"
            element={<BookingOrderDetailPage />}
          />
          <Route
            path="booking-details/:id"
            element={<BookingOrderDetailPage />}
          />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showNavbar && <Footer />}
    </>
  );
};

export default AppRoutes;
