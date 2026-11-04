import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaCar,
} from "react-icons/fa";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setLoginData({
            ...loginData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(loginData);

        alert("Login Successfully");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 px-5">

            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl w-full max-w-md p-8">

                <div className="text-center mb-8">

                    <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">

                        <FaCar className="text-4xl text-blue-700" />

                    </div>

                    <h1 className="text-3xl font-bold text-white mt-5">
                        CarXpress Admin
                    </h1>

                    <p className="text-white/80 mt-2">
                        Sign in to continue
                    </p>

                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>

                        <label className="text-white font-semibold">
                            Email Address
                        </label>

                        <div className="relative mt-2">

                            <FaEnvelope className="absolute left-4 top-4 text-gray-500" />

                            <input
                                type="email"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                                placeholder="admin@gmail.com"
                                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none border bg-white"
                                required
                            />

                        </div>

                    </div>

                    <div>

                        <label className="text-white font-semibold">
                            Password
                        </label>

                        <div className="relative mt-2">

                            <FaLock className="absolute left-4 top-4 text-gray-500" />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                placeholder="********"
                                className="w-full pl-12 pr-12 py-3 rounded-xl outline-none border bg-white"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>

                    </div>

                    <div className="flex justify-between items-center">

                        <label className="flex items-center gap-2 text-white">

                            <input
                                type="checkbox"
                                name="remember"
                                checked={loginData.remember}
                                onChange={handleChange}
                            />

                            Remember Me

                        </label>

                        <Link
                            to="/forgot-password"
                            className="text-yellow-300 hover:text-yellow-200"
                        >
                            Forgot Password?
                        </Link>

                    </div>

                    <button
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Login
                    </button>

                </form>

                <div className="text-center mt-6 text-white">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="ml-2 text-yellow-300 hover:text-yellow-200 font-semibold"
                    >
                        Register
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default LoginForm;