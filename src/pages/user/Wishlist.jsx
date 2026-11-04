import { FaHeart, FaTrash } from "react-icons/fa";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const wishlist = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        name: "BMW M4 Competition",
        price: "₹1.45 Cr",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
        name: "Audi R8",
        price: "₹2.30 Cr",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
        name: "Kawasaki Ninja ZX-10R",
        price: "₹18.50 Lakh",
    },
];

const Wishlist = () => {
    return (
        <>
            <Navbar />

            <section className="bg-gradient-to-r from-pink-600 to-red-600 text-white py-20">

                <div className="max-w-7xl mx-auto text-center">

                    <FaHeart className="mx-auto text-6xl mb-4" />

                    <h1 className="text-5xl font-bold">
                        My Wishlist
                    </h1>

                    <p className="mt-4">
                        Save your dream vehicles for later.
                    </p>

                </div>

            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {wishlist.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-60 object-cover hover:scale-105 transition duration-500"
                            />

                            <div className="p-6">

                                <h2 className="text-2xl font-bold">
                                    {item.name}
                                </h2>

                                <p className="text-blue-600 text-xl font-semibold mt-2">
                                    {item.price}
                                </p>

                                <div className="flex gap-3 mt-6">

                                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                                        View Details
                                    </button>

                                    <button className="bg-red-600 hover:bg-red-700 text-white px-5 rounded-xl">
                                        <FaTrash />
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <Footer />
        </>
    );
};

export default Wishlist;