import { useState } from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import BikeForm from '../../components/admin/forms/BikeForm';
import BikeTable from '../../components/admin/tables/BikeTable';
import { FaMotorcycle, FaPlus, FaTable } from 'react-icons/fa';

const Bikes = () => {
    const [activeTab, setActiveTab] = useState('table');

    return (
        <AdminLayout>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                        <FaMotorcycle className="text-blue-600" />
                        Bike Management
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage all showroom bikes from one place.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => setActiveTab('table')}
                        className={`px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2 ${activeTab === 'table'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-white shadow hover:bg-gray-50'
                            }`}
                    >
                        <FaTable />
                        Bikes List
                    </button>

                    <button
                        onClick={() => setActiveTab('form')}
                        className={`px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2 ${activeTab === 'form'
                            ? 'bg-green-600 text-white shadow-lg'
                            : 'bg-white shadow hover:bg-gray-50'
                            }`}
                    >
                        <FaPlus />
                        Add Bike
                    </button>
                </div>
            </div>

            {/* Content */}
            {activeTab === 'table' ? <BikeTable /> : <BikeForm />}
        </AdminLayout>
    );
};

export default Bikes;