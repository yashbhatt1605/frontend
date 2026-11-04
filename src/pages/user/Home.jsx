import { useEffect, useState } from "react";

import Hero from "../../components/user/Hero";
import CategoryCard from "../../components/user/CategoryCard";
import ProductCard from "../../components/user/ProductCard";

const Home = () => {
    const [cars, setCars] = useState([]);
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch("https://6a6199ceda10c59c1809a1eb.mockapi.io/cardetaild/cardetails")
            .then((res) => res.json())
            .then((data) => setCars(data.slice(0, 6)))
            .catch((err) => console.log(err));

        fetch("https://6a6212aa1bffb2ffab8ae502.mockapi.io/bikesdetails/bikesdetails")
            .then((res) => res.json())
            .then((data) => setBikes(data.slice(0, 6)))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="bg-white pt-20 text-gray-900">

            <Hero />

            {/* Categories */}

            <section className="max-w-7xl mx-auto py-16 px-6">

                <div className="text-center mb-12">

                    <h2 className="text-4xl font-bold">
                        Browse Categories
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Explore our premium collection.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <CategoryCard
                        title="Luxury Cars"
                        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"
                    />

                    <CategoryCard
                        title="Sports Cars"
                        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600"
                    />

                    <CategoryCard
                        title="Sports Bikes"
                        image="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600"
                    />

                    <CategoryCard
                        title="Electric Vehicles"
                        image="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600"
                    />

                </div>

            </section>

            {/* Featured Cars */}

            <section className="max-w-7xl mx-auto py-16 px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Featured Cars
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {cars.map((car, index) => (

                        <ProductCard
                            key={car.id ?? car._id ?? `${car.brand}-${car.name}`}
                            id={car.id ?? car._id}
                            image={car.image}
                            name={car.name}
                            brand={car.brand}
                            price={car.price}
                            type="car"
                            index={index}
                        />

                    ))}

                </div>

            </section>

            {/* Featured Bikes */}

            <section className="max-w-7xl mx-auto py-16 px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Featured Bikes
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {bikes.map((bike, index) => (

                        <ProductCard
                            key={bike.id ?? bike._id ?? `${bike.brand}-${bike.name}`}
                            id={bike.id ?? bike._id}
                            image={bike.image}
                            name={bike.name}
                            brand={bike.brand}
                            price={bike.price}
                            type="bike"
                            index={index}
                        />

                    ))}

                </div>

            </section>

            {/* Statistics */}

            <section className="bg-black text-white py-16 mt-10">

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    <div>
                        <h1 className="text-5xl font-bold text-gray-300">
                            500+
                        </h1>
                        <p className="mt-3 text-gray-300">
                            Premium Cars
                        </p>
                    </div>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-300">
                            300+
                        </h1>
                        <p className="mt-3 text-gray-300">
                            Sports Bikes
                        </p>
                    </div>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-300">
                            25K+
                        </h1>
                        <p className="mt-3 text-gray-300">
                            Happy Customers
                        </p>
                    </div>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-300">
                            4.9★
                        </h1>
                        <p className="mt-3 text-gray-300">
                            Customer Rating
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default Home;