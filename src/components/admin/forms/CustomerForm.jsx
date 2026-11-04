import { useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaSave,
    FaUndo,
} from "react-icons/fa";

const CustomerForm = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        gender: "",
        status: "Active",
    };

    const [customer, setCustomer] = useState(initialState);

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(customer);

        alert("Customer Added Successfully!");
    };

    const handleReset = () => {
        setCustomer(initialState);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-8">
                <FaUser className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold">
                    Add New Customer
                </h2>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="font-semibold">
                            First Name
                        </label>

                        <input
                            type="text"
                            name="firstName"
                            value={customer.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Last Name
                        </label>

                        <input
                            type="text"
                            name="lastName"
                            value={customer.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
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
                            value={customer.email}
                            onChange={handleChange}
                            placeholder="john@gmail.com"
                            className="w-full mt-2 border rounded-xl p-3"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold flex items-center gap-2">
                            <FaPhone />
                            Phone
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            value={customer.phone}
                            onChange={handleChange}
                            placeholder="+91 9876543210"
                            className="w-full mt-2 border rounded-xl p-3"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Gender
                        </label>

                        <select
                            name="gender"
                            value={customer.gender}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Status
                        </label>

                        <select
                            name="status"
                            value={customer.status}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label className="font-semibold flex items-center gap-2">
                            <FaMapMarkerAlt />
                            Address
                        </label>

                        <textarea
                            rows="3"
                            name="address"
                            value={customer.address}
                            onChange={handleChange}
                            placeholder="Enter complete address"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            City
                        </label>

                        <input
                            type="text"
                            name="city"
                            value={customer.city}
                            onChange={handleChange}
                            placeholder="Ahmedabad"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            State
                        </label>

                        <input
                            type="text"
                            name="state"
                            value={customer.state}
                            onChange={handleChange}
                            placeholder="Gujarat"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Pin Code
                        </label>

                        <input
                            type="number"
                            name="pincode"
                            value={customer.pincode}
                            onChange={handleChange}
                            placeholder="363001"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                </div>

                <div className="flex gap-5 mt-8">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition"
                    >
                        <FaSave />
                        Save Customer
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

export default CustomerForm;
