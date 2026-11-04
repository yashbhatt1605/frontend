import { useState } from "react";
import {
    FaSearch,
    FaPlus,
    FaEye,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

const CategoryTable = () => {
    const [search, setSearch] = useState("");

    const categories = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200",
            name: "SUV",
            vehicleType: "Car",
            totalVehicles: 25,
            featured: true,
            status: "Active",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200",
            name: "Sedan",
            vehicleType: "Car",
            totalVehicles: 18,
            featured: false,
            status: "Active",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=200",
            name: "Sports Bike",
            vehicleType: "Bike",
            totalVehicles: 30,
            featured: true,
            status: "Active",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=200",
            name: "Electric",
            vehicleType: "Both",
            totalVehicles: 12,
            featured: false,
            status: "Inactive",
        },
    ];

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6">

            {/* Header */}

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

                <h2 className="text-2xl font-bold">
                    Category Management
                </h2>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition">
                    <FaPlus />
                    Add Category
                </button>

            </div>

            {/* Search */}

            <div className="relative mb-6">

                <FaSearch className="absolute left-4 top-4 text-gray-400" />

                <input
                    type="text"
                    placeholder="Search Category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border rounded-xl pl-12 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

            </div>

            {/* Table */}

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-4 text-left">Image</th>
                            <th className="p-4 text-left">Category</th>
                            <th className="p-4 text-left">Vehicle</th>
                            <th className="p-4 text-left">Vehicles</th>
                            <th className="p-4 text-left">Featured</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-center">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredCategories.map((category) => (
                            <tr
                                key={category.id}
                                className="border-b hover:bg-blue-50 transition"
                            >

                                <td className="p-4">

                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-20 h-14 rounded-lg object-cover"
                                    />

                                </td>

                                <td className="p-4 font-semibold">
                                    {category.name}
                                </td>

                                <td className="p-4">
                                    {category.vehicleType}
                                </td>

                                <td className="p-4">
                                    {category.totalVehicles}
                                </td>

                                <td className="p-4">

                                    {category.featured ? (
                                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                                            Featured
                                        </span>
                                    ) : (
                                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                            Normal
                                        </span>
                                    )}

                                </td>

                                <td className="p-4">

                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${category.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {category.status}
                                    </span>

                                </td>

                                <td className="p-4">

                                    <div className="flex justify-center gap-3">

                                        <button className="bg-blue-100 hover:bg-blue-600 hover:text-white p-2 rounded-lg transition">
                                            <FaEye />
                                        </button>

                                        <button className="bg-green-100 hover:bg-green-600 hover:text-white p-2 rounded-lg transition">
                                            <FaEdit />
                                        </button>

                                        <button className="bg-red-100 hover:bg-red-600 hover:text-white p-2 rounded-lg transition">
                                            <FaTrash />
                                        </button>

                                    </div>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* Footer */}

            <div className="flex flex-col md:flex-row justify-between items-center mt-6">

                <p className="text-gray-500">
                    Showing {filteredCategories.length} Categories
                </p>

                <div className="flex gap-2 mt-4 md:mt-0">

                    <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
                        Prev
                    </button>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        1
                    </button>

                    <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
                        2
                    </button>

                    <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
                        Next
                    </button>

                </div>

            </div>

        </div>
    );
};

export default CategoryTable;