import { useState } from "react";
import {
    FaCog,
    FaSave,
    FaUndo,
    FaBuilding,
    FaEnvelope,
    FaPhone,
    FaGlobe,
    FaMoon,
    FaBell,
    FaMoneyBillWave,
} from "react-icons/fa";

const SettingsForm = () => {
    const initialState = {
        showroomName: "CarXpress",
        companyName: "CarXpress Pvt Ltd",
        email: "admin@carxpress.com",
        phone: "+91 9876543210",
        address: "",
        website: "",
        timezone: "Asia/Kolkata",
        currency: "INR",
        language: "English",
        darkMode: false,
        notifications: true,
        maintenanceMode: false,
    };

    const [settings, setSettings] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setSettings({
            ...settings,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(settings);

        alert("Settings Saved Successfully");
    };

    const handleReset = () => {
        setSettings(initialState);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-8">

                <FaCog className="text-3xl text-blue-600" />

                <h2 className="text-3xl font-bold">
                    Website Settings
                </h2>

            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>

                        <label className="font-semibold flex items-center gap-2">
                            <FaBuilding />
                            Showroom Name
                        </label>

                        <input
                            type="text"
                            name="showroomName"
                            value={settings.showroomName}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label className="font-semibold">
                            Company Name
                        </label>

                        <input
                            type="text"
                            name="companyName"
                            value={settings.companyName}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex items-center gap-2">
                            <FaEnvelope />
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={settings.email}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex items-center gap-2">
                            <FaPhone />
                            Phone
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={settings.phone}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label className="font-semibold">
                            Address
                        </label>

                        <input
                            type="text"
                            name="address"
                            value={settings.address}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex items-center gap-2">
                            <FaGlobe />
                            Website
                        </label>

                        <input
                            type="url"
                            name="website"
                            value={settings.website}
                            onChange={handleChange}
                            placeholder="https://www.carxpress.com"
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label className="font-semibold">
                            Time Zone
                        </label>

                        <select
                            name="timezone"
                            value={settings.timezone}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option>Asia/Kolkata</option>
                            <option>UTC</option>
                            <option>America/New_York</option>
                            <option>Europe/London</option>
                        </select>

                    </div>

                    <div>

                        <label className="font-semibold flex items-center gap-2">
                            <FaMoneyBillWave />
                            Currency
                        </label>

                        <select
                            name="currency"
                            value={settings.currency}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option>INR</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>AED</option>
                        </select>

                    </div>

                    <div>

                        <label className="font-semibold">
                            Language
                        </label>

                        <select
                            name="language"
                            value={settings.language}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Gujarati</option>
                        </select>

                    </div>

                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">

                    <label className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">

                        <input
                            type="checkbox"
                            name="darkMode"
                            checked={settings.darkMode}
                            onChange={handleChange}
                        />

                        <FaMoon className="text-blue-600" />

                        Dark Mode

                    </label>

                    <label className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">

                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleChange}
                        />

                        <FaBell className="text-green-600" />

                        Notifications

                    </label>

                    <label className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">

                        <input
                            type="checkbox"
                            name="maintenanceMode"
                            checked={settings.maintenanceMode}
                            onChange={handleChange}
                        />

                        Maintenance Mode

                    </label>

                </div>

                <div className="flex gap-5 mt-8">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition"
                    >
                        <FaSave />
                        Save Settings
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition"
                    >
                        <FaUndo />
                        Reset
                    </button>

                </div>

            </form>

        </div>
    );
};

export default SettingsForm;