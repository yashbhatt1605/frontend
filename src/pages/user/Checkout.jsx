import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const Checkout = () => {
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold mb-10">
                    Checkout
                </h1>

                <div className="grid lg:grid-cols-3 gap-10">

                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-6">
                            Billing Details
                        </h2>

                        <div className="grid md:grid-cols-2 gap-5">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border rounded-xl px-4 py-3"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border rounded-xl px-4 py-3"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="border rounded-xl px-4 py-3"
                            />

                            <input
                                type="text"
                                placeholder="City"
                                className="border rounded-xl px-4 py-3"
                            />

                        </div>

                        <textarea
                            placeholder="Full Address"
                            rows="5"
                            className="w-full border rounded-xl mt-5 p-4"
                        ></textarea>

                        <h2 className="text-2xl font-bold mt-10 mb-5">
                            Payment Method
                        </h2>

                        <div className="space-y-3">

                            <label className="flex items-center gap-3">
                                <input type="radio" name="payment" defaultChecked />
                                Credit / Debit Card
                            </label>

                            <label className="flex items-center gap-3">
                                <input type="radio" name="payment" />
                                UPI
                            </label>

                            <label className="flex items-center gap-3">
                                <input type="radio" name="payment" />
                                Cash on Delivery
                            </label>

                        </div>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">

                        <h2 className="text-2xl font-bold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-3">
                            <span>BMW M4 Competition</span>
                            <span>₹1,45,00,000</span>
                        </div>

                        <div className="flex justify-between mb-3">
                            <span>Kawasaki Ninja ZX-10R</span>
                            <span>₹18,50,000</span>
                        </div>

                        <hr className="my-5" />

                        <div className="flex justify-between text-xl font-bold">

                            <span>Total</span>

                            <span>₹1,63,50,000</span>

                        </div>

                        <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl transition">
                            Place Order
                        </button>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default Checkout;