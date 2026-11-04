import { Outlet } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";

const UserLayout = () => {
    return (
        <>
            <Navbar />

            <main className="pt-24 min-h-screen">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default UserLayout;