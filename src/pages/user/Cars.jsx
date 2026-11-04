import { useEffect, useState } from "react";
import ProductCard from "../../components/user/ProductCard";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://6a6199ceda10c59c1809a1eb.mockapi.io/cardetaild/cardetails")
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setFilteredCars(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const result = cars.filter((car) =>
            (car.name || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            (car.brand || "")
                .toLowerCase()
                .includes(search.toLowerCase())
        );

        setFilteredCars(result);
    }, [search, cars]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-3xl font-bold">
                Loading Cars...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-gray-900">

            {/* Hero */}

            <section className="bg-gradient-to-r from-black via-gray-900 to-gray-800 py-20 text-white">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold">
                        Premium Cars Collection
                    </h1>

                    <p className="mt-4 text-lg text-gray-300">
                        Discover luxury, sports and family cars from top brands.
                    </p>

                </div>

            </section>

            {/* Search */}

            <section className="max-w-7xl mx-auto px-6 py-10">

                <input
                    type="text"
                    placeholder="🔍 Search by Name or Brand..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />

            </section>

            {/* Cards */}

            <section className="max-w-7xl mx-auto px-6 pb-16">

                <div className="flex justify-between items-center mb-8">

                    <h2 className="text-3xl font-bold tracking-tight">
                        Available Cars
                    </h2>

                    <span className="text-gray-500 font-semibold">
                        {filteredCars.length} Cars Found
                    </span>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">

                    {filteredCars.map((car, index) => (

                        <ProductCard
                            key={car.id ?? car._id ?? `${car.brand}-${car.name}`}
                            index={index}
                            id={car.id ?? car._id}
                            image={car.image}
                            name={car.name}
                            brand={car.brand}
                            price={car.price ?? car.Price ?? car.amount ?? car.cost}
                            type="car"
                        />

                    ))}

                </div>

                {!loading && filteredCars.length === 0 && (
                    <div className="text-center text-2xl text-gray-500 mt-20">
                        No Cars Found
                    </div>
                )}

            </section>

        </div>
    );
};

export default Cars;