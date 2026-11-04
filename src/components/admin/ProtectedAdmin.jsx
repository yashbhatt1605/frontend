import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedAdmin;