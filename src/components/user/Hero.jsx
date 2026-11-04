import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section
            className="relative flex min-h-[680px] items-center justify-center bg-cover bg-center py-20 sm:min-h-[760px]"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&auto=format&fit=crop&q=75')",
            }}
        >
            <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">CarXpress • Premium Collection</p>
                <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                    Drive Your <span className="text-gray-300">Dream</span> Vehicle
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 sm:text-xl">
                    Discover premium cars, superbikes and exceptional vehicles from leading brands.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        to="/cars"
                        className="rounded-lg bg-white px-8 py-4 font-bold text-black transition-colors hover:bg-gray-200"
                    >
                        Explore Cars
                    </Link>
                    <Link
                        to="/bikes"
                        className="rounded-lg border border-white px-8 py-4 font-bold text-white transition-colors hover:bg-white hover:text-black"
                    >
                        Explore Bikes
                    </Link>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                    {[
                        ["500+", "Cars"],
                        ["300+", "Bikes"],
                        ["25K+", "Customers"],
                        ["4.9★", "Rating"],
                    ].map(([value, label]) => (
                        <div key={label}>
                            <h2 className="text-3xl font-bold sm:text-4xl">{value}</h2>
                            <p className="mt-2 text-gray-300">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
