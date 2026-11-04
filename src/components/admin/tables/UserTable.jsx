import { useState } from "react";
import {
    FaSearch,
    FaPlus,
    FaEye,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

const UserTable = () => {
    const [search, setSearch] = useState("");

    const users = [
        {
            id: 1,
            avatar: "https://i.pravatar.cc/150?img=11",
            name: "Yash Rana",
            email: "yash@gmail.com",
            role: "Admin",
            phone: "9876543210",
            status: "Active",
            joined: "10 Jul 2026",
        },
        {
            id: 2,
            avatar: "https://i.pravatar.cc/150?img=12",
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            role: "Manager",
            phone: "9988776655",
            status: "Active",
            joined: "12 Jul 2026",
        },
        {
            id: 3,
            avatar: "https://i.pravatar.cc/150?img=13",
            name: "Priya Patel",
            email: "priya@gmail.com",
            role: "Sales Executive",
            phone: "9876500000",
            status: "Inactive",
            joined: "15 Jul 2026",
        },
        {
            id: 4,
            avatar: "https://i.pravatar.cc/150?img=14",
            name: "Amit Shah",
            email: "amit@gmail.com",
            role: "Customer",
            phone: "9898989898",
            status: "Blocked",
            joined: "16 Jul 2026",
        },
    ];

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.role.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6">

            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

                <h2 className="text-2xl font-bold text-gray-800">
                    User Management
                </h2>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition">
                    <FaPlus />
                    Add User
                </button>

            </div>

            <div className="relative mb-6">

                <FaSearch className="absolute left-4 top-4 text-gray-400" />

                <input
                    type="text"
                    placeholder="Search Users..."
                    className="w-full border rounded-xl pl-12 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-4 text-left">User</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Role</th>
                            <th className="p-4 text-left">Phone</th>
                            <th className="p-4 text-left">Joined</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-center">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredUsers.map((user) => (

                            <tr
                                key={user.id}
                                className="border-b hover:bg-blue-50 transition"
                            >

                                <td className="p-4">

                                    <div className="flex items-center gap-3">

                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />

                                        <span className="font-semibold">
                                            {user.name}
                                        </span>

                                    </div>

                                </td>

                                <td className="p-4">
                                    {user.email}
                                </td>

                                <td className="p-4">

                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                        {user.role}
                                    </span>

                                </td>

                                <td className="p-4">
                                    {user.phone}
                                </td>

                                <td className="p-4">
                                    {user.joined}
                                </td>

                                <td className="p-4">

                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${user.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : user.status === "Inactive"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {user.status}
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

            <div className="flex flex-col md:flex-row justify-between items-center mt-6">

                <p className="text-gray-500">
                    Showing {filteredUsers.length} Users
                </p>

                <div className="flex gap-2">

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

export default UserTable;