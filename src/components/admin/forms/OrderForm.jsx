import { useState } from "react";
import {
    FaShoppingCart,
    FaSave,
    FaUndo,
} from "react-icons/fa";

const OrderForm = () => {
    const initialState = {
        customerName: "",
        email: "",
        phone: "",
        vehicleType: "",
        vehicleName: "",
        quantity: 1,
        price: "",
        paymentMethod: "",
        paymentStatus: "Pending",
        orderStatus: "Processing",
        deliveryDate: "",
        notes: "",
    };

    const [order, setOrder] = useState(initialState);

    const handleChange = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(order);

        alert("Order Saved Successfully");
    };

    const handleReset = () => {
        setOrder(initialState);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-8">
                <FaShoppingCart className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold">
                    Create New Order
                </h2>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="font-semibold">Customer Name</label>
                        <input
                            type="text"
                            name="customerName"
                            value={order.customerName}
                            onChange={handleChange}
                            placeholder="Enter customer name"
                            className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={order.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full mt-2 border rounded-xl p-3"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={order.phone}
                            onChange={handleChange}
                            placeholder="+91 9876543210"
                            className="w-full mt-2 border rounded-xl p-3"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Vehicle Type</label>
                        <select
                            name="vehicleType"
                            value={order.vehicleType}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                            required
                        >
                            <option value="">Select Type</option>
                            <option>Car</option>
                            <option>Bike</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">Vehicle Name</label>
                        <input
                            type="text"
                            name="vehicleName"
                            value={order.vehicleName}
                            onChange={handleChange}
                            placeholder="BMW M4"
                            className="w-full mt-2 border rounded-xl p-3"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Quantity</label>
                        <input
                            type="number"
                            min="1"
                            name="quantity"
                            value={order.quantity}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Total Price</label>
                        <input
                            type="text"
                            name="price"
                            value={order.price}
                            onChange={handleChange}
                            placeholder="₹1,50,00,000"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Payment Method</label>
                        <select
                            name="paymentMethod"
                            value={order.paymentMethod}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option value="">Select Method</option>
                            <option>Cash</option>
                            <option>Card</option>
                            <option>UPI</option>
                            <option>Bank Transfer</option>
                            <option>Finance</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">Payment Status</label>
                        <select
                            name="paymentStatus"
                            value={order.paymentStatus}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option>Pending</option>
                            <option>Paid</option>
                            <option>Failed</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">Order Status</label>
                        <select
                            name="orderStatus"
                            value={order.orderStatus}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option>Processing</option>
                            <option>Confirmed</option>
                            <option>Shipped</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">Delivery Date</label>
                        <input
                            type="date"
                            name="deliveryDate"
                            value={order.deliveryDate}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                </div>

                <div className="mt-6">
                    <label className="font-semibold">Notes</label>
                    <textarea
                        rows="4"
                        name="notes"
                        value={order.notes}
                        onChange={handleChange}
                        placeholder="Additional order notes..."
                        className="w-full mt-2 border rounded-xl p-3"
                    />
                </div>

                <div className="flex gap-4 mt-8">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition"
                    >
                        <FaSave />
                        Save Order
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

export default OrderForm;