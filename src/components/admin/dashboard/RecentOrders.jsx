import React from "react";

const orders = [
    {
        id: 1,
        customer: "Yash Rana",
        vehicle: "BMW M4 Competition",
        amount: "₹1.52 Cr",
        status: "Delivered",
    },
    {
        id: 2,
        customer: "Rahul Patel",
        vehicle: "Kawasaki ZX-10R",
        amount: "₹18.5 Lakh",
        status: "Pending",
    },
    {
        id: 3,
        customer: "Amit Shah",
        vehicle: "Mercedes AMG GT",
        amount: "₹2.75 Cr",
        status: "Processing",
    },
    {
        id: 4,
        customer: "Priya Sharma",
        vehicle: "Hayabusa",
        amount: "₹17.8 Lakh",
        status: "Delivered",
    },
];

const statusColor = (status) => {
    switch (status) {
        case "Delivered":
            return "bg-green-100 text-green-600";
        case "Pending":
            return "bg-yellow-100 text-yellow-600";
        case "Processing":
            return "bg-blue-100 text-blue-600";
        default:
            return "bg-gray-100 text-gray-600";
    }
};

const RecentOrders = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                    Recent Orders
                </h2>

                <button className="text-blue-600 hover:underline">
                    View All
                </button>
            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-3 text-left">Customer</th>
                            <th className="p-3 text-left">Vehicle</th>
                            <th className="p-3 text-left">Amount</th>
                            <th className="p-3 text-left">Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className="border-b hover:bg-blue-50 transition"
                            >
                                <td className="p-4">{order.customer}</td>
                                <td>{order.vehicle}</td>
                                <td>{order.amount}</td>

                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor(
                                            order.status
                                        )}`}
                                    >
                                        {order.status}
                                    </span>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default RecentOrders;