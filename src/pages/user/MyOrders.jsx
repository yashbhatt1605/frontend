import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const orders = [
    {
        id: "#ORD1001",
        vehicle: "BMW M4 Competition",
        price: "₹1.45 Cr",
        status: "Delivered",
        date: "15 Jul 2026",
    },
    {
        id: "#ORD1002",
        vehicle: "Kawasaki Ninja ZX-10R",
        price: "₹18.50 Lakh",
        status: "Processing",
        date: "18 Jul 2026",
    },
    {
        id: "#ORD1003",
        vehicle: "Audi R8",
        price: "₹2.30 Cr",
        status: "Pending",
        date: "20 Jul 2026",
    },
];

const MyOrders = () => {
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold mb-8">
                    My Orders
                </h1>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-blue-600 text-white">

                            <tr>

                                <th className="p-4 text-left">Order ID</th>
                                <th className="p-4 text-left">Vehicle</th>
                                <th className="p-4 text-left">Price</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4 text-left">Date</th>

                            </tr>

                        </thead>

                        <tbody>

                            {orders.map((order) => (

                                <tr
                                    key={order.id}
                                    className="border-b hover:bg-gray-100 transition"
                                >

                                    <td className="p-4">{order.id}</td>

                                    <td className="p-4 font-semibold">
                                        {order.vehicle}
                                    </td>

                                    <td className="p-4">
                                        {order.price}
                                    </td>

                                    <td className="p-4">

                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${order.status === "Delivered"
                                                    ? "bg-green-100 text-green-700"
                                                    : order.status === "Processing"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {order.status}
                                        </span>

                                    </td>

                                    <td className="p-4">
                                        {order.date}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default MyOrders;