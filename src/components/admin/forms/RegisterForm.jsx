import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaUserShield,
} from "react-icons/fa";

const RegisterForm = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "Admin",
        password: "",
        confirmPassword: "",
        terms: false,
    };

    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log(formData);

        alert("Registration Successful");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-600 p-6">

            <div className="w-full max-w-2xl bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">

                <div className="text-center mb-8">

                    <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center shadow-xl">

                        <FaUserShield className="text-4xl text-blue-700" />

                    </div>

                    <h1 className="text-3xl font-bold text-white mt-5">
                        Create Admin Account
                    </h1>

                    <p className="text-white/80 mt-2">
                        Register to manage your showroom
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div>

                            <label className="text-white font-semibold">
                                First Name
                            </label>

                            <div className="relative mt-2">

                                <FaUser className="absolute left-4 top-4 text-gray-500" />

                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    required
                                    className="w-full pl-12 py-3 rounded-xl outline-none"
                                />

                            </div>

                        </div>

                        <div>

                            <label className="text-white font-semibold">
                                Last Name
                            </label>

                            <div className="relative mt-2">

                                <FaUser className="absolute left-4 top-4 text-gray-500" />

                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    required
                                    className="w-full pl-12 py-3 rounded-xl outline-none"
                                />

                            </div>

                        </div>

                        <div>

                            <label className="text-white font-semibold">
                                Email
                            </label>

                            <div className="relative mt-2">

                                <FaEnvelope className="absolute left-4 top-4 text-gray-500" />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="admin@gmail.com"
                                    required
                                    className="w-full pl-12 py-3 rounded-xl outline-none"
                                />

                            </div>

                        </div>

                        <div>

                            <label className="text-white font-semibold">
                                Phone
                            </label>

                            <div className="relative mt-2">

                                <FaPhone className="absolute left-4 top-4 text-gray-500" />

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 9876543210"
                                    required
                                    className="w-full pl-12 py-3 rounded-xl outline-none"
                                />

                            </div>

                        </div>

                        <div>

                            <label className="text-white font-semibold">
                                Role
                            </label>

                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full mt-2 rounded-xl p-3 outline-none"
                            >
                                <option>Admin</option>
                                <option>Manager</option>
                                <option>Sales Executive</option>
                            </select>

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
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-12 py-3 rounded-xl outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-4"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>

                            </div>

                        </div>

                        <div className="md:col-span-2">

                            <label className="text-white font-semibold">
                                Confirm Password
                            </label>

                            <div className="relative mt-2">

                                <FaLock className="absolute left-4 top-4 text-gray-500" />

                                <input
                                    type={showConfirm ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-12 py-3 rounded-xl outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-4"
                                >
                                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                                </button>

                            </div>

                        </div>

                    </div>

                    <label className="flex items-center gap-3 mt-6 text-white">

                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                        />

                        I accept Terms & Conditions

                    </label>

                    <button
                        type="submit"
                        className="w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition duration-300 hover:scale-105"
                    >
                        Create Account
                    </button>

                </form>

                <p className="text-center text-white mt-6">

                    Already have an account?

                    <Link
                        to="/login"
                        className="ml-2 text-yellow-300 font-semibold hover:text-yellow-200"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
};

export default RegisterForm;