import { useState } from "react";
import { FaMotorcycle, FaSave, FaUndo } from "react-icons/fa";

const BikeForm = () => {
    const initialState = {
        name: "",
        brand: "",
        model: "",
        year: "",
        engine: "",
        mileage: "",
        color: "",
        fuel: "",
        transmission: "",
        price: "",
        stock: "",
        image: null,
        description: "",
        featured: false,
    };

    const [bike, setBike] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        setBike({
            ...bike,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "file"
                        ? files[0]
                        : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(bike);

        alert("Bike Added Successfully");
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="flex items-center gap-3 mb-8">
                <FaMotorcycle className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold">
                    Add New Bike
                </h2>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">

                    <input
                        className="border rounded-xl p-3"
                        placeholder="Bike Name"
                        name="name"
                        value={bike.name}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded-xl p-3"
                        placeholder="Brand"
                        name="brand"
                        value={bike.brand}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded-xl p-3"
                        placeholder="Model"
                        name="model"
                        value={bike.model}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded-xl p-3"
                        placeholder="Year"
                        name="year"
                        value={bike.year}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded-xl p-3"
                        placeholder="Engine"
                        name="engine"
                        value={bike.engine}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded-xl p-3"
                        placeholder="Mileage"
                        name="mileage"
                        value={bike.mileage}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded-xl p-3"
                        placeholder="Color"
                        name="color"
                        value={bike.color}
                        onChange={handleChange}
                    />

                    <select
                        className="border rounded-xl p-3"
                        name="fuel"
                        value={bike.fuel}
                        onChange={handleChange}
                    >
                        <option value="">Fuel Type</option>
                        <option>Petrol</option>
                        <option>Electric</option>
                    </select>

                    <select
                        className="border rounded-xl p-3"
                        name="transmission"
                        value={bike.transmission}
                        onChange={handleChange}
                    >
                        <option value="">Transmission</option>
                        <option>Manual</option>
                        <option>Automatic</option>
                    </select>

                    <input
                        className="border rounded-xl p-3"
                        placeholder="Price"
                        name="price"
                        value={bike.price}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        className="border rounded-xl p-3"
                        placeholder="Stock"
                        name="stock"
                        value={bike.stock}
                        onChange={handleChange}
                    />

                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="border rounded-xl p-3"
                    />

                </div>

                <textarea
                    rows="5"
                    className="border rounded-xl p-3 w-full mt-6"
                    placeholder="Bike Description"
                    name="description"
                    value={bike.description}
                    onChange={handleChange}
                />

                <div className="mt-5">
                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="featured"
                            checked={bike.featured}
                            onChange={handleChange}
                        />
                        Featured Bike
                    </label>
                </div>

                <div className="flex gap-4 mt-8">

                    <button className="bg-blue-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700">
                        <FaSave />
                        Save Bike
                    </button>

                    <button
                        type="button"
                        onClick={() => setBike(initialState)}
                        className="bg-gray-500 text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-600"
                    >
                        <FaUndo />
                        Reset
                    </button>

                </div>

            </form>

        </div>
    );
};

export default BikeForm;