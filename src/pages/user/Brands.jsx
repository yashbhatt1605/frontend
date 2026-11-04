import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const brands = [
    {
        id: 1,
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
        vehicles: 25,
    },
    {
        id: 2,
        name: "Audi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
        vehicles: 18,
    },
    {
        id: 3,
        name: "Mercedes",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
        vehicles: 20,
    },
    {
        id: 4,
        name: "Toyota",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
        vehicles: 32,
    },
    {
        id: 5,
        name: "Honda",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
        vehicles: 16,
    },
    {
        id: 6,
        name: "Kawasaki",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Kawasaki_Logo.svg",
        vehicles: 12,
    },
];

const Brands = () => {
    return (
        <>
            <Navbar />

            <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">

                <div className="max-w-7xl mx-auto text-center">

                    <h1 className="text-5xl font-bold">
                        Top Vehicle Brands
                    </h1>

                    <p className="mt-4 text-gray-200">
                        Explore premium brands from around the world.
                    </p>

                </div>

            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {brands.map((brand) => (

                        <div
                            key={brand.id}
                            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                        >

                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-24 h-24 mx-auto object-contain"
                            />

                            <h2 className="text-2xl font-bold mt-6">
                                {brand.name}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                {brand.vehicles} Vehicles
                            </p>

                            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
                                View Vehicles
                            </button>

                        </div>

                    ))}

                </div>

            </section>

            <Footer />
        </>
    );
};

export default Brands;