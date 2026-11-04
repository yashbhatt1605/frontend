import { useState } from "react";
import {
    FaTag,
    FaGlobe,
    FaCalendarAlt,
    FaImage,
    FaSave,
    FaUndo,
} from "react-icons/fa";

const BrandForm = () => {
    const initialState = {
        brandName: "",
        country: "",
        foundedYear: "",
        website: "",
        description: "",
        status: "Active",
        featured: false,
        logo: null,
        preview: "",
    };

    const [brand, setBrand] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "file") {
            const file = files[0];

            setBrand({
                ...brand,
                logo: file,
                preview: file ? URL.createObjectURL(file) : "",
            });

            return;
        }

        setBrand({
            ...brand,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(brand);

        alert("Brand Added Successfully");
    };

    const handleReset = () => {
        setBrand(initialState);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-8">

                <FaTag className="text-3xl text-blue-600" />

                <h2 className="text-3xl font-bold">
                    Add New Brand
                </h2>

            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="font-semibold">
                            Brand Name
                        </label>

                        <input
                            type="text"
                            name="brandName"
                            value={brand.brandName}
                            onChange={handleChange}
                            placeholder="BMW"
                            className="w-full mt-2 border rounded-xl p-3"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold flex gap-2 items-center">
                            <FaGlobe />
                            Country
                        </label>

                        <input
                            type="text"
                            name="country"
                            value={brand.country}
                            onChange={handleChange}
                            placeholder="Germany"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold flex gap-2 items-center">
                            <FaCalendarAlt />
                            Founded Year
                        </label>

                        <input
                            type="number"
                            name="foundedYear"
                            value={brand.foundedYear}
                            onChange={handleChange}
                            placeholder="1916"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Website
                        </label>

                        <input
                            type="url"
                            name="website"
                            value={brand.website}
                            onChange={handleChange}
                            placeholder="https://www.bmw.com"
                            className="w-full mt-2 border rounded-xl p-3"
                        />
                    </div>

                    <div className="md:col-span-2">

                        <label className="font-semibold flex items-center gap-2">
                            <FaImage />
                            Brand Logo
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                        {brand.preview && (
                            <img
                                src={brand.preview}
                                alt="Preview"
                                className="w-28 h-28 rounded-xl object-cover mt-4 border"
                            />
                        )}

                    </div>

                    <div className="md:col-span-2">

                        <label className="font-semibold">
                            Description
                        </label>

                        <textarea
                            rows="5"
                            name="description"
                            value={brand.description}
                            onChange={handleChange}
                            placeholder="Enter Brand Description..."
                            className="w-full mt-2 border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label className="font-semibold">
                            Status
                        </label>

                        <select
                            name="status"
                            value={brand.status}
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-xl p-3"
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>

                    </div>

                    <div className="flex items-center mt-8">

                        <input
                            type="checkbox"
                            name="featured"
                            checked={brand.featured}
                            onChange={handleChange}
                        />

                        <label className="ml-3 font-semibold">
                            Featured Brand
                        </label>

                    </div>

                </div>

                <div className="flex gap-5 mt-8">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2"
                    >
                        <FaSave />
                        Save Brand
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

export default BrandForm;