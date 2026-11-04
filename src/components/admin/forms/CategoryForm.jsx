import { useState } from "react";
import {
    FaListAlt,
    FaImage,
    FaSave,
    FaUndo,
    FaStar,
} from "react-icons/fa";

const CategoryForm = () => {
    const initialState = {
        categoryName: "",
        vehicleType: "",
        description: "",
        icon: "",
        image: null,
        preview: "",
        featured: false,
        status: "Active",
    };

    const [category, setCategory] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "file") {
            const file = files[0];

            setCategory({
                ...category,
                image: file,
                preview: file ? URL.createObjectURL(file) : "",
            });

            return;
        }

        setCategory({
            ...category,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(category);

        alert("Category Added Successfully");
    };

    const handleReset = () => {
        setCategory(initialState);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-8">

                <FaListAlt className="text-blue-600 text-3xl" />

                <h2 className="text-3xl font-bold">
                    Add New Category
                </h2>

            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Category Name */}

                    <div>

                        <label className="font-semibold">
                            Category Name
                        </label>

                        <input
                            type="text"
                            name="categoryName"
                            value={category.categoryName}
                            onChange={handleChange}
                            placeholder="SUV"
                            className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />

                    </div>

                    {/* Vehicle Type */}

                    <div>

                        <label className="font-semibold">
                            Vehicle Type
                        </label>

                        <select
                            name="vehicleType"
                            value={category.vehicleType}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option value="">Select Type</option>
                            <option>Car</option>
                            <option>Bike</option>
                            <option>Both</option>
                        </select>

                    </div>

                    {/* Icon */}

                    <div>

                        <label className="font-semibold">
                            Icon Name
                        </label>

                        <input
                            type="text"
                            name="icon"
                            value={category.icon}
                            onChange={handleChange}
                            placeholder="FaCar"
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                    </div>

                    {/* Status */}

                    <div>

                        <label className="font-semibold">
                            Status
                        </label>

                        <select
                            name="status"
                            value={category.status}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>

                    </div>

                    {/* Image */}

                    <div className="md:col-span-2">

                        <label className="font-semibold flex gap-2 items-center">

                            <FaImage />

                            Category Image

                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                        {category.preview && (

                            <img
                                src={category.preview}
                                alt="Preview"
                                className="w-36 h-24 object-cover rounded-xl mt-4 shadow"
                            />

                        )}

                    </div>

                    {/* Description */}

                    <div className="md:col-span-2">

                        <label className="font-semibold">
                            Description
                        </label>

                        <textarea
                            rows="5"
                            name="description"
                            value={category.description}
                            onChange={handleChange}
                            placeholder="Write category description..."
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                    </div>

                    {/* Featured */}

                    <div className="md:col-span-2 flex items-center">

                        <input
                            type="checkbox"
                            name="featured"
                            checked={category.featured}
                            onChange={handleChange}
                        />

                        <label className="ml-3 flex items-center gap-2 font-semibold">

                            <FaStar className="text-yellow-500" />

                            Featured Category

                        </label>

                    </div>

                </div>

                <div className="flex gap-5 mt-8">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition"
                    >
                        <FaSave />

                        Save Category
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition"
                    >
                        <FaUndo />

                        Reset
                    </button>

                </div>

            </form>

        </div>
    );
};

export default CategoryForm;