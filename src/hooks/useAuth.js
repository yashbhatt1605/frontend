import { useNavigate } from "react-router-dom";
import { useAuth as useAuthContext } from "../context/AuthContext";

const useAuth = () => {
    const auth = useAuthContext();
    const navigate = useNavigate();

    const logout = () => {
        if (auth?.logout) {
            auth.logout();
        }

        navigate("/login");
    };

    return {
        ...auth,
        logout,
    };
};

export default useAuth;