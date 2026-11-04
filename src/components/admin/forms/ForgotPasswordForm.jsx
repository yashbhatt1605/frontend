import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaEnvelope,
    FaArrowLeft,
    FaPaperPlane,
    FaCar,
} from "react-icons/fa";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email);

        alert("Password reset link has been sent to your email.");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 px-5">

            <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8">

                {/* Logo */}

                <div className="text-center mb-8">

                    <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">

                        <FaCar className="text-4xl text-blue-700" />

                    </div>

                    <h1 className="text-3xl font-bold text-white mt-5">
                        Forgot Password
                    </h1>

                    <p className="text-white/80 mt-2">
                        Enter your registered email address
                    </p>

                </div>

                {/* Form */}

                <form onSubmit={handleSubmit}>

                    <div>

                        <label className="text-white font-semibold">
                            Email Address
                        </label>

                        <div className="relative mt-2">

                            <FaEnvelope className="absolute left-4 top-4 text-gray-500" />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@gmail.com"
                                required
                                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none border bg-white focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                        <FaPaperPlane />
                        Send Reset Link
                    </button>

                </form>

                {/* Back */}

                <div className="text-center mt-6">

                    <Link
                        to="/login"
                        className="inline-flex items-center gap-2 text-white hover:text-yellow-300 transition"
                    >
                        <FaArrowLeft />
                        Back to Login
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default ForgotPasswordForm;