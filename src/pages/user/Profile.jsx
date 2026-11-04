import { useState } from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const Profile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john@example.com",
        phone: "+91 9876543210",
        city: "Ahmedabad",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Navbar />

            <div className="max-w-5xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold mb-8">
                    My Profile
                </h1>

                <div className="bg-white rounded-2xl shadow-xl p-8">

                    <div className="flex flex-col items-center">

                        <img
                            src="https://ui-avatars.com/api/?name=John+Doe&background=2563eb&color=fff&size=200"
                            alt="Profile"
                            className="w-32 h-32 rounded-full shadow-lg"
                        />

                        <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                            Change Photo
                        </button>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-10">

                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="border rounded-xl px-4 py-3"
                        />

                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="border rounded-xl px-4 py-3"
                        />

                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="border rounded-xl px-4 py-3"
                        />

                        <input
                            type="text"
                            name="city"
                            value={user.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="border rounded-xl px-4 py-3"
                        />

                    </div>

                    <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl">
                        Update Profile
                    </button>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default Profile;