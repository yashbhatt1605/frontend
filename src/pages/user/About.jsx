const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

            <h1 className="text-5xl font-bold mb-8">
                About CarXpress
            </h1>

            <p className="text-lg text-gray-600 leading-8">
                CarXpress is India's premium showroom where you can explore
                luxury cars and sports bikes from world-class brands.

                We provide the latest information, prices,
                specifications and booking facilities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">

                <div className="bg-white shadow rounded-2xl p-8">

                    <h2 className="text-3xl font-bold text-blue-600">
                        500+
                    </h2>

                    <p>Vehicles</p>

                </div>

                <div className="bg-white shadow rounded-2xl p-8">

                    <h2 className="text-3xl font-bold text-blue-600">
                        1500+
                    </h2>

                    <p>Customers</p>

                </div>

                <div className="bg-white shadow rounded-2xl p-8">

                    <h2 className="text-3xl font-bold text-blue-600">
                        50+
                    </h2>

                    <p>Brands</p>

                </div>

            </div>

        </div>
    );
};

export default About;