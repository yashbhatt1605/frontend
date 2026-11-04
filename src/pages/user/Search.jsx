import { useState } from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import ProductCard from "../../components/user/ProductCard";

const Search = () => {
    const [search, setSearch] = useState("");

    const vehicles = [
        { id: 1, title: "BMW M4 Competition", brand: "BMW", price: "₹1.45 Cr" },
        { id: 2, title: "Audi R8", brand: "Audi", price: "₹2.30 Cr" },
        { id: 3, title: "Mercedes AMG GT", brand: "Mercedes", price: "₹2.80 Cr" },
        { id: 4, title: "Kawasaki Ninja ZX-10R", brand: "Kawasaki", price: "₹18.50 Lakh" },
        { id: 5, title: "Yamaha R15 V4", brand: "Yamaha", price: "₹2.10 Lakh" },
        { id: 6, title: "BMW S1000RR", brand: "BMW", price: "₹22.00 Lakh" },
    ];

    const filtered = vehicles.filter(
        (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.brand.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar />

            <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold">Search Vehicles</h1>
                    <p className="mt-4 text-gray-200">
                        Find your favourite car or bike.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-10">

                <input
                    type="text"
                    placeholder="Search by vehicle or brand..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border rounded-xl px-5 py-4 shadow focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <h2 className="text-2xl font-bold mt-10 mb-6">
                    {filtered.length} Results Found
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filtered.map((vehicle) => (
                        <ProductCard
                            key={vehicle.id}
                            title={vehicle.title}
                            brand={vehicle.brand}
                            price={vehicle.price}
                        />
                    ))}

                </div>

            </div>

            <Footer />
        </>
    );
};

export default Search;