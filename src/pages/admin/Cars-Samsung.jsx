
import { useState } from "react";
import AdminLayout from "../../components/admin/layout/AdminLayout";
import CarForm from "../../components/admin/forms/CarForm";
import CarTable from "../../components/admin/tables/CarTable";
import { FaCar, FaPlus, FaTable } from "react-icons/fa";

const Cars = () => {
    const [activeTab, setActiveTab] = useState("table");

    return (
        <AdminLayout>
            <div className="w-full min-w-0 space-y-6">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-800">
                            <FaCar className="text-blue-600" />
                            Car Management
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Manage all showroom cars from one place.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={() => setActiveTab("table")}
                            className={`flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${
                                activeTab === "table"
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "border bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <FaTable />
                            Cars List
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("form")}
                            className={`flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${
                                activeTab === "form"
                                    ? "bg-green-600 text-white shadow-lg"
                                    : "border bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <FaPlus />
                            Add Car
                        </button>
                    </div>
                </div>

                {activeTab === "table" ? (
                    <CarTable onAddCar={() => setActiveTab("form")} />
                ) : (
                    <CarForm />
                )}
            </div>
        </AdminLayout>
    );
};

export default Cars;
