import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMotorcycle, FaGasPump, FaCogs, FaPalette, FaTachometerAlt } from "react-icons/fa";

const BIKE_API = "https://6a6212aa1bffb2ffab8ae502.mockapi.io/bikesdetails/bikesdetails";

const valueOrFallback = (value, fallback = "Not provided") =>
    value !== undefined && value !== null && String(value).trim() !== ""
        ? value
        : fallback;

const BikeDetails = () => {
    const { id } = useParams();
    const [bike, setBike] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        const loadBike = async () => {
            setLoading(true);
            setError("");
            setBike(null);

            try {
                if (!id) throw new Error("The bike ID is missing from the page URL.");

                // Try the single-record endpoint first.
                let data = null;
                const response = await fetch(`${BIKE_API}/${encodeURIComponent(id)}`, {
                    signal: controller.signal,
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result && String(result.id ?? result._id) === String(id)) data = result;
                }

                // Fallback: load the collection and match IDs as strings.
                // This handles APIs/records where the single-record route behaves differently.
                if (!data) {
                    const listResponse = await fetch('https://6a6212aa1bffb2ffab8ae502.mockapi.io/bikesdetails/bikesdetails', { signal: controller.signal });
                    if (!listResponse.ok) throw new Error("Unable to load bike details. Please try again.");
                    const list = await listResponse.json();
                    if (Array.isArray(list)) {
                        data = list.find((item) => String(item.id ?? item._id) === String(id)) || null;
                    }
                }

                if (!data) throw new Error("This bike could not be found. Please return to the listing and try again.");
                setBike(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message || "Unable to load bike details.");
                }
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        };

        loadBike();
        return () => controller.abort();
    }, [id]);

    if (loading) {
        return <div className="min-h-[60vh] bg-white px-6 py-24 text-center text-lg text-gray-600">Loading bike details…</div>;
    }

    if (error || !bike) {
        return (
            <main className="min-h-[60vh] bg-white px-6 py-24 text-center">
                <h1 className="text-3xl font-bold text-gray-900">Bike details unavailable</h1>
                <p className="mt-3 text-gray-600">{error || "This bike could not be found."}</p>
                <Link to="/bikes" className="mt-6 inline-block rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-700">Back to bikes</Link>
            </main>
        );
    }

    const specifications = [
        { label: "Engine", value: bike.engine || bike.engineCapacity, icon: <FaMotorcycle /> },
        { label: "Fuel", value: bike.fuel || bike.fuelType, icon: <FaGasPump /> },
        { label: "Transmission", value: bike.transmission, icon: <FaCogs /> },
        { label: "Type", value: bike.type || bike.category, icon: <FaMotorcycle /> },
        { label: "Top speed", value: bike.topSpeed, icon: <FaTachometerAlt /> },
        { label: "Fuel tank", value: bike.fuelTank || bike.fuelTankCapacity, icon: <FaGasPump /> },
        { label: "Color", value: bike.color, icon: <FaPalette /> },
        { label: "Year", value: bike.year || bike.modelYear, icon: null },
        { label: "Availability", value: bike.status || "Available", icon: null },
    ];

    const rawPrice = bike.price;
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
                <Link to="/bikes" className="mb-6 inline-block text-sm font-semibold text-gray-600 hover:text-black">← Back to bikes</Link>
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl bg-gray-100">
                        {bike.image ? (
                            <img src={bike.image} alt={bike.name || "Bike"} fetchPriority="high" decoding="async" className="h-[300px] w-full object-cover sm:h-[440px]" />
                        ) : (
                            <div className="flex h-[300px] items-center justify-center text-gray-500 sm:h-[440px]">Image unavailable</div>
                        )}
                    </div>
                    <section>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{valueOrFallback(bike.brand, "CarXpress Collection")}</p>
                        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{valueOrFallback(bike.name, "Bike details")}</h1>
                        <p className="mt-5 text-3xl font-bold">{price}</p>
                        {bike.description && <p className="mt-5 leading-7 text-gray-600">{bike.description}</p>}
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
                        <button type="button" onClick={() => window.alert("Please contact CarXpress to enquire about this bike.")} className="mt-8 w-full rounded-lg bg-black px-6 py-4 font-semibold text-white transition-colors hover:bg-gray-700">Enquire about this bike</button>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default BikeDetails;
