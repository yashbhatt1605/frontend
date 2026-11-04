import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaGasPump, FaCogs, FaCarSide, FaPalette, FaTachometerAlt } from "react-icons/fa";

const CAR_API = "https://6a6199ceda10c59c1809a1eb.mockapi.io/cardetaild/cardetails";

const valueOrFallback = (value, fallback = "Not provided") =>
    value !== undefined && value !== null && String(value).trim() !== ""
        ? value
        : fallback;

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        const loadCar = async () => {
            setLoading(true);
            setError("");
            setCar(null);

            try {
                if (!id) throw new Error("The car ID is missing from the page URL.");

                // Try the single-record endpoint first.
                let data = null;
                const response = await fetch(`${CAR_API}/${encodeURIComponent(id)}`, {
                    signal: controller.signal,
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result && String(result.id ?? result._id) === String(id)) data = result;
                }

                // Fallback: load the collection and match IDs as strings.
                // This handles APIs/records where the single-record route behaves differently.
                if (!data) {
                    const listResponse = await fetch('https://6a6199ceda10c59c1809a1eb.mockapi.io/cardetaild/cardetails', { signal: controller.signal });
                    if (!listResponse.ok) throw new Error("Unable to load car details. Please try again.");
                    const list = await listResponse.json();
                    if (Array.isArray(list)) {
                        data = list.find((item) => String(item.id ?? item._id) === String(id)) || null;
                    }
                }

                if (!data) throw new Error("This car could not be found. Please return to the listing and try again.");
                setCar(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message || "Unable to load car details.");
                }
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        };

        loadCar();
        return () => controller.abort();
    }, [id]);

    if (loading) {
        return <div className="min-h-[60vh] bg-white px-6 py-24 text-center text-lg text-gray-600">Loading car details…</div>;
    }

    if (error || !car) {
        return (
            <main className="min-h-[60vh] bg-white px-6 py-24 text-center">
                <h1 className="text-3xl font-bold text-gray-900">Car details unavailable</h1>
                <p className="mt-3 text-gray-600">{error || "This car could not be found."}</p>
                <Link to="/cars" className="mt-6 inline-block rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-700">Back to cars</Link>
            </main>
        );
    }

    const specifications = [
        { label: "Fuel", value: car.fuel || car.fuelType, icon: <FaGasPump /> },
        { label: "Transmission", value: car.transmission, icon: <FaCogs /> },
        { label: "Vehicle type", value: car.type || car.category, icon: <FaCarSide /> },
        { label: "Engine", value: car.engine || car.engineCapacity, icon: <FaTachometerAlt /> },
        { label: "Mileage", value: car.mileage, icon: <FaTachometerAlt /> },
        { label: "Color", value: car.color, icon: <FaPalette /> },
        { label: "Year", value: car.year || car.modelYear, icon: null },
        { label: "Availability", value: car.status || "Available", icon: null },
    ];

    const rawPrice = car.price;
    const numericPrice = rawPrice !== undefined && rawPrice !== null && rawPrice !== ""
        ? Number(rawPrice)
        : NaN;
    const price = rawPrice === undefined || rawPrice === null || rawPrice === ""
        ? "Price on request"
        : Number.isFinite(numericPrice)
            ? `₹ ${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(numericPrice)}`
            : String(rawPrice).startsWith("₹")
                ? String(rawPrice)
                : `₹ ${rawPrice}`;

    return (
        <main className="min-h-screen bg-white px-4 py-10 text-gray-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Link to="/cars" className="mb-6 inline-block text-sm font-semibold text-gray-600 hover:text-black">← Back to cars</Link>
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl bg-gray-100">
                        {car.image ? (
                            <img src={car.image} alt={car.name || "Car"} fetchPriority="high" decoding="async" className="h-[300px] w-full object-cover sm:h-[440px]" />
                        ) : (
                            <div className="flex h-[300px] items-center justify-center text-gray-500 sm:h-[440px]">Image unavailable</div>
                        )}
                    </div>
                    <section>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{valueOrFallback(car.brand, "CarXpress Collection")}</p>
                        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{valueOrFallback(car.name, "Car details")}</h1>
                        <p className="mt-5 text-3xl font-bold">{price}</p>
                        {car.description && <p className="mt-5 leading-7 text-gray-600">{car.description}</p>}
                        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                            {specifications.map((item) => (
                                <div key={item.label} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        {item.icon && <span aria-hidden="true">{item.icon}</span>}
                                        <span className="text-xs font-semibold uppercase tracking-wide">{item.label}</span>
                                    </div>
                                    <p className="mt-2 break-words font-semibold">{valueOrFallback(item.value)}</p>
                                </div>
                            ))}
                        </div>
                        <button type="button" onClick={() => window.alert("Please contact CarXpress to complete your purchase.")} className="mt-8 w-full rounded-lg bg-black px-6 py-4 font-semibold text-white transition-colors hover:bg-gray-700">Enquire about this car</button>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default CarDetails;
