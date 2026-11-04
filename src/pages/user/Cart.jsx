import { FaTrash } from "react-icons/fa";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const cartItems = [
    {
        id: 1,
        name: "BMW M4 Competition",
        price: 14500000,
        quantity: 1,
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    },
    {
        id: 2,
        name: "Kawasaki Ninja ZX-10R",
        price: 1850000,
        quantity: 1,
        image:
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600",
    },
];

const Cart = () => {
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold mb-10">
                    Shopping Cart
                </h1>

                <div className="grid lg:grid-cols-3 gap-10">

                    <div className="lg:col-span-2 space-y-6">

                        {cartItems.map((item) => (

                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-lg p-5 flex flex-col md:flex-row gap-5 items-center hover:shadow-xl transition"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-48 h-32 object-cover rounded-xl"
                                />

                                <div className="flex-1">

                                    <h2 className="text-2xl font-bold">
                                        {item.name}
                                    </h2>

                                    <p className="text-blue-600 font-semibold mt-2">
                                        ₹{item.price.toLocaleString()}
                                    </p>

                                    <div className="mt-4">

                                        <input
                                            type="number"
                                            defaultValue={item.quantity}
                                            min="1"
                                            className="border rounded-lg px-3 py-2 w-20"
                                        />

                                    </div>

                                </div>

                                <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl">
                                    <FaTrash />
                                </button>

                            </div>

                        ))}

                    </div>

                    <div className="bg-white shadow-xl rounded-2xl p-8 h-fit">

                        <h2 className="text-2xl font-bold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-3">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between mb-3">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>

                        <hr className="my-5" />

                        <div className="flex justify-between font-bold text-xl">

                            <span>Total</span>

                            <span>
                                ₹{subtotal.toLocaleString()}
                            </span>

                        </div>

                        <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl">
                            Proceed to Checkout
                        </button>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default Cart;