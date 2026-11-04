import { useState } from "react";
import { FaCar, FaImage, FaSave, FaUndo } from "react-icons/fa";

const CarForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        model: "",
        year: "",
        price: "",
        fuel: "",
        transmission: "",
        mileage: "",
        color: "",
        engine: "",
        stock: "",
        featured: false,
        description: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        setFormData({
            ...formData,
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

        console.log(formData);

        alert("Car Added Successfully");
    };

    const handleReset = () => {
        setFormData({
            name: "",
            brand: "",
            model: "",
            year: "",
            price: "",
            fuel: "",
            transmission: "",
            mileage: "",
            color: "",
            engine: "",
            stock: "",
            featured: false,
            description: "",
            image: null,
        });
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-8">
                <FaCar className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold">
                    Add New Car
                </h2>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="font-semibold">Car Name</label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="BMW M4"
                            className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Brand</label>

                        <input
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            placeholder="BMW"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Model</label>

                        <input
                            type="text"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            placeholder="2025"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Year</label>

                        <input
                            type="number"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            placeholder="2025"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Price</label>

                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="₹1.53 Cr"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Fuel Type</label>

                        <select
                            name="fuel"
                            value={formData.fuel}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option value="">Select Fuel</option>
                            <option>Petrol</option>
                            <option>Diesel</option>
                            <option>Electric</option>
                            <option>Hybrid</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">Transmission</label>

                        <select
                            name="transmission"
                            value={formData.transmission}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option value="">Select</option>
                            <option>Manual</option>
                            <option>Automatic</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">Mileage</label>

                        <input
                            type="text"
                            name="mileage"
                            value={formData.mileage}
                            onChange={handleChange}
                            placeholder="18 km/l"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Color</label>

                        <input
                            type="text"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            placeholder="Black"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Engine</label>

                        <input
                            type="text"
                            name="engine"
                            value={formData.engine}
                            onChange={handleChange}
                            placeholder="3000 CC"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Stock</label>

                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            placeholder="5"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold flex items-center gap-2">
                            <FaImage />
                            Upload Image
                        </label>

                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                </div>

                <div className="mt-6">

                    <label className="font-semibold">
                        Description
                    </label>

                    <textarea
                        rows="5"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter car description..."
                        className="w-full mt-2 border rounded-xl p-3"
                    ></textarea>

                </div>

                <div className="mt-6">

                    <label className="flex items-center gap-3">

                        <input
                            type="checkbox"
                            name="featured"
                            checked={formData.featured}
                            onChange={handleChange}
                        />

                        Featured Vehicle

                    </label>

                </div>

                <div className="flex gap-5 mt-8">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2"
                    >
                        <FaSave />
                        Save Car
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl flex items-center gap-2"
                    >
                        <FaUndo />
                        Reset
                    </button>

                </div>

            </form>

        </div>
    );
};

export default CarForm;