import { useEffect, useState } from "react";
import ProductCard from "../../components/user/ProductCard";

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://6a6212aa1bffb2ffab8ae502.mockapi.io/bikesdetails/bikesdetails")
            .then((res) => res.json())
            .then((data) => setBikes(data))
            .catch((err) => console.log(err));
    }, []);

    const filteredBikes = bikes.filter((bike) =>
        (bike.name || "")
            .toLowerCase()
            .includes(search.toLowerCase()) ||
        (bike.brand || "")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white text-gray-900">

            {/* Hero */}

            <section className="bg-gradient-to-r from-black via-gray-900 to-gray-800 py-20 text-white">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold">
                        Premium Bikes Collection
                    </h1>

                    <p className="mt-4 text-gray-300">
                        Explore the latest sports, adventure and cruiser bikes.
                    </p>

                </div>

            </section>

            {/* Search */}

            <section className="max-w-7xl mx-auto px-6 py-10">

                <input
                    type="text"
                    placeholder="Search Bikes..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 outline-none focus:ring-2 focus:ring-gray-500 md:w-96"
                />

            </section>

            {/* Bikes */}

            <section className="max-w-7xl mx-auto px-6 pb-16">

                <div className="flex justify-between items-center mb-8">

                    <h2 className="text-3xl font-bold">
                        Available Bikes
                    </h2>

                    <span className="text-gray-500">
                        {filteredBikes.length} Bikes Found
                    </span>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filteredBikes.map((bike, index) => (

                        <ProductCard
                            key={bike.id ?? bike._id ?? `${bike.brand}-${bike.name}`}
                            id={bike.id ?? bike._id}
                            index={index}
                            image={bike.image}
                            name={bike.name}
                            brand={bike.brand}
                            price={bike.price ?? bike.Price ?? bike.amount ?? bike.cost}
                            type="bike"
                        />

                    ))}

                </div>

                {filteredBikes.length === 0 && (
                    <p className="mt-12 text-center text-gray-500">No bikes found.</p>
                )}

            </section>

        </div>
    );
};

export default Bikes;