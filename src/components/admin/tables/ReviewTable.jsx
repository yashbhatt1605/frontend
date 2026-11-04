import { useState } from "react";
import {
    FaSearch,
    FaPlus,
    FaEye,
    FaEdit,
    FaTrash,
    FaStar,
} from "react-icons/fa";

const ReviewTable = () => {
    const [search, setSearch] = useState("");

    const reviews = [
        {
            id: 1,
            customer: "Rahul Sharma",
            vehicle: "BMW M4",
            rating: 5,
            review:
                "Excellent car with amazing performance and premium interior.",
            status: "Published",
            date: "12 Jul 2026",
        },
        {
            id: 2,
            customer: "Priya Patel",
            vehicle: "Audi R8",
            rating: 4,
            review:
                "Very comfortable and luxurious driving experience.",
            status: "Published",
            date: "13 Jul 2026",
        },
        {
            id: 3,
            customer: "Amit Shah",
            vehicle: "Yamaha R15",
            rating: 3,
            review:
                "Good bike but delivery was delayed.",
            status: "Pending",
            date: "14 Jul 2026",
        },
        {
            id: 4,
            customer: "Neha Verma",
            vehicle: "Kawasaki Ninja",
            rating: 5,
            review:
                "Best sports bike I've ever ridden.",
            status: "Published",
            date: "15 Jul 2026",
        },
        {
            id: 5,
            customer: "Rohan Mehta",
            vehicle: "Mercedes C-Class",
            rating: 2,
            review:
                "Average experience. Customer support needs improvement.",
            status: "Hidden",
            date: "16 Jul 2026",
        },
    ];

    const filteredReviews = reviews.filter(
        (review) =>
            review.customer.toLowerCase().includes(search.toLowerCase()) ||
            review.vehicle.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6">

            {/* Header */}

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

                <h2 className="text-2xl font-bold text-gray-800">
                    Customer Reviews
                </h2>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition">
                    <FaPlus />
                    Add Review
                </button>

            </div>

            {/* Search */}

            <div className="relative mb-6">

                <FaSearch className="absolute left-4 top-4 text-gray-400" />

                <input
                    type="text"
                    placeholder="Search Reviews..."
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

                            <th className="p-4 text-left">Customer</th>
                            <th className="p-4 text-left">Vehicle</th>
                            <th className="p-4 text-left">Rating</th>
                            <th className="p-4 text-left">Review</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-center">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredReviews.map((review) => (

                            <tr
                                key={review.id}
                                className="border-b hover:bg-blue-50 transition"
                            >

                                <td className="p-4 font-semibold">
                                    {review.customer}
                                </td>

                                <td className="p-4">
                                    {review.vehicle}
                                </td>

                                <td className="p-4">

                                    <div className="flex text-yellow-500">

                                        {[...Array(review.rating)].map((_, index) => (
                                            <FaStar key={index} />
                                        ))}

                                    </div>

                                </td>

                                <td className="p-4 max-w-xs">
                                    {review.review}
                                </td>

                                <td className="p-4">

                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${review.status === "Published"
                                            ? "bg-green-100 text-green-700"
                                            : review.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {review.status}
                                    </span>

                                </td>

                                <td className="p-4">
                                    {review.date}
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
                    Showing {filteredReviews.length} Reviews
                </p>

                <div className="flex gap-2 mt-4 md:mt-0">

                    <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                        Prev
                    </button>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        1
                    </button>

                    <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                        2
                    </button>

                    <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                        Next
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ReviewTable;