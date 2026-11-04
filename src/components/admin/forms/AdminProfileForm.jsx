import { useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaCamera,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGlobe,
    FaSave,
    FaUndo,
} from "react-icons/fa";

const AdminProfileForm = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        website: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        bio: "",
        image: null,
        preview: "",
    };

    const [profile, setProfile] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            const file = files[0];

            setProfile({
                ...profile,
                image: file,
                preview: file ? URL.createObjectURL(file) : "",
            });

            return;
        }

        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(profile);

        alert("Profile Updated Successfully");
    };

    const handleReset = () => {
        setProfile(initialState);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-8">
                <FaUser className="text-blue-600 text-3xl" />
                <h2 className="text-3xl font-bold">
                    Admin Profile
                </h2>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="flex justify-center mb-8">

                    <div className="relative">

                        <img
                            src={
                                profile.preview ||
                                "https://via.placeholder.com/150"
                            }
                            alt="Profile"
                            className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
                        />

                        <label className="absolute bottom-2 right-2 bg-blue-600 p-3 rounded-full cursor-pointer text-white hover:bg-blue-700">

                            <FaCamera />

                            <input
                                type="file"
                                hidden
                                onChange={handleChange}
                            />

                        </label>

                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>

                        <label className="font-semibold">
                            First Name
                        </label>

                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold">
                            Last Name
                        </label>

                        <input
                            type="text"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex gap-2 items-center">
                            <FaEnvelope />
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex gap-2 items-center">
                            <FaPhone />
                            Phone
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex gap-2 items-center">
                            <FaMapMarkerAlt />
                            Address
                        </label>

                        <input
                            type="text"
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold">
                            City
                        </label>

                        <input
                            type="text"
                            name="city"
                            value={profile.city}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold">
                            State
                        </label>

                        <input
                            type="text"
                            name="state"
                            value={profile.state}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold">
                            Country
                        </label>

                        <input
                            type="text"
                            name="country"
                            value={profile.country}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex gap-2 items-center">
                            <FaGlobe />
                            Website
                        </label>

                        <input
                            type="url"
                            name="website"
                            value={profile.website}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex gap-2 items-center">
                            <FaFacebook />
                            Facebook
                        </label>

                        <input
                            type="url"
                            name="facebook"
                            value={profile.facebook}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex gap-2 items-center">
                            <FaInstagram />
                            Instagram
                        </label>

                        <input
                            type="url"
                            name="instagram"
                            value={profile.instagram}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold flex gap-2 items-center">
                            <FaLinkedin />
                            LinkedIn
                        </label>

                        <input
                            type="url"
                            name="linkedin"
                            value={profile.linkedin}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

                </div>

                <div className="mt-6">

                    <label className="font-semibold">
                        Bio
                    </label>

                    <textarea
                        rows="5"
                        name="bio"
                        value={profile.bio}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 mt-2"
                        placeholder="Write something about yourself..."
                    />

                </div>

                <div className="flex gap-5 mt-8">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2"
                    >
                        <FaSave />
                        Save Profile
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl flex items-center gap-2"
                    >
                        <FaUndo />
                        Reset
                    </button>

                </div>

            </form>

        </div>
    );
};

export default AdminProfileForm;