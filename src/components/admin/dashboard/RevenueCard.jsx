import React from "react";
import { FaArrowUp } from "react-icons/fa";

const RevenueCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

            <h2 className="text-2xl font-bold mb-6">
                Revenue
            </h2>

            <h1 className="text-5xl font-bold text-blue-600">
                ₹12.86L
            </h1>

            <div className="flex items-center gap-2 text-green-600 font-semibold mt-4">
                <FaArrowUp />
                18.5% Increase
            </div>

            <div className="mt-8">

                <div className="mb-5">

                    <div className="flex justify-between mb-2">
                        <span>Cars</span>
                        <span>80%</span>
                    </div>

                    <div className="h-3 rounded-full bg-gray-200">

                        <div className="bg-blue-600 h-3 rounded-full w-4/5"></div>

                    </div>

                </div>

                <div>

                    <div className="flex justify-between mb-2">
                        <span>Bikes</span>
                        <span>60%</span>
                    </div>

                    <div className="h-3 rounded-full bg-gray-200">

                        <div className="bg-green-500 h-3 rounded-full w-3/5"></div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default RevenueCard; 