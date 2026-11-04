import { useState } from "react";
import {
    FaLock,
    FaEye,
    FaEyeSlash,
    FaSave,
    FaUndo,
} from "react-icons/fa";

const ChangePasswordForm = () => {
    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false,
    });

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const togglePassword = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            alert("New Password and Confirm Password do not match!");
            return;
        }

        console.log(formData);

        alert("Password Changed Successfully!");

        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    const handleReset = () => {
        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl p-8">

                <div className="text-center mb-8">

                    <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg">
                        <FaLock size={30} />
                    </div>

                    <h2 className="text-3xl font-bold mt-5">
                        Change Password
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Update your account password securely
                    </p>

                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Current Password */}

                    <div>

                        <label className="font-semibold">
                            Current Password
                        </label>

                        <div className="relative mt-2">

                            <input
                                type={showPassword.old ? "text" : "password"}
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                className="w-full border rounded-xl p-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => togglePassword("old")}
                                className="absolute right-4 top-4 text-gray-500"
                            >
                                {showPassword.old ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>

                    </div>

                    {/* New Password */}

                    <div>

                        <label className="font-semibold">
                            New Password
                        </label>

                        <div className="relative mt-2">

                            <input
                                type={showPassword.new ? "text" : "password"}
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="w-full border rounded-xl p-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => togglePassword("new")}
                                className="absolute right-4 top-4 text-gray-500"
                            >
                                {showPassword.new ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>

                    </div>

                    {/* Confirm Password */}

                    <div>

                        <label className="font-semibold">
                            Confirm Password
                        </label>

                        <div className="relative mt-2">

                            <input
                                type={showPassword.confirm ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full border rounded-xl p-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => togglePassword("confirm")}
                                className="absolute right-4 top-4 text-gray-500"
                            >
                                {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>

                    </div>

                    <div className="flex gap-4 pt-4">

                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <FaSave />
                            Change Password
                        </button>

                        <button
                            type="button"
                            onClick={handleReset}
                            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <FaUndo />
                            Reset
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default ChangePasswordForm;