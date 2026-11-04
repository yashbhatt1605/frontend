import { useState } from "react";
import AdminLayout from "../../components/admin/layout/AdminLayout";
import CarForm from "../../components/admin/forms/CarForm";
import CarTable from "../../components/admin/tables/CarTable";
import { FaCar, FaPlus, FaTable } from "react-icons/fa";

const Cars = () => {
    const [activeTab, setActiveTab] = useState("table");

    return (
        <AdminLayout>
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">

                <div>
                    <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                        <FaCar className="text-blue-600" />
                        Car Management
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage all showroom cars from one place.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-3 mt-5 md:mt-0">

                    <button
                        onClick={() => setActiveTab("table")}
                        className={`px-6 py-3 rounded-xl font-semibold transition ${activeTab === "table"
                            ? "bg-blue-600 text-white"
                            : "bg-white shadow"
                            }`}
                    >
                        <FaTable className="inline mr-2" />
                        Cars List
                    </button>

                    <button
                        onClick={() => setActiveTab("form")}
                        className={`px-6 py-3 rounded-xl font-semibold transition ${activeTab === "form"
                            ? "bg-green-600 text-white"
                            : "bg-white shadow"
                            }`}
                    >
                        <FaPlus className="inline mr-2" />
                        Add Car
                    </button>

                </div>

            </div>

            {/* Content */}

            {activeTab === "table" ? (
                <CarTable />
            ) : (
                <CarForm />
            )}

        </AdminLayout>
    );
};

export default Cars;