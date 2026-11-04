import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const categories = [
    {
        id: 1,
        title: "Luxury Cars",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    },
    {
        id: 2,
        title: "Sports Cars",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
    },
    {
        id: 3,
        title: "SUV",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
    },
    {
        id: 4,
        title: "Electric Cars",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
    },
    {
        id: 5,
        title: "Sports Bikes",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
    },
    {
        id: 6,
        title: "Cruiser Bikes",
        image: "https://images.unsplash.com/photo-1529429617124-aee711a5ac1c?w=800",
    },
];

const Categories = () => {
    return (
        <>
            <Navbar />

            <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20">

                <div className="max-w-7xl mx-auto text-center">

                    <h1 className="text-5xl font-bold">
                        Vehicle Categories
                    </h1>

                    <p className="mt-4 text-gray-100">
                        Find the perfect vehicle according to your lifestyle.
                    </p>

                </div>

            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {categories.map((category) => (

                        <div
                            key={category.id}
                            className="relative rounded-2xl overflow-hidden shadow-xl group"
                        >

                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">

                                <h2 className="text-white text-3xl font-bold">
                                    {category.title}
                                </h2>

                                <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition">
                                    Explore
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <Footer />
        </>
    );
};

export default Categories;