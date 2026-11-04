import { Link } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const NotFound = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">

                <h1 className="text-8xl font-extrabold text-blue-600">
                    404
                </h1>

                <h2 className="text-4xl font-bold mt-6">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mt-4 max-w-lg">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition"
                >
                    Back to Home
                </Link>

            </div>

            <Footer />
        </>
    );
};

export default NotFound;