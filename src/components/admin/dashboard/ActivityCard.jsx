import React from "react";
import {
    FaCar,
    FaMotorcycle,
    FaUserPlus,
    FaShoppingBag,
} from "react-icons/fa";

const activities = [
    {
        id: 1,
        icon: <FaCar />,
        title: "New BMW Added",
        time: "10 Minutes Ago",
        color: "bg-blue-500",
    },
    {
        id: 2,
        icon: <FaMotorcycle />,
        title: "New Bike Listed",
        time: "30 Minutes Ago",
        color: "bg-green-500",
    },
    {
        id: 3,
        icon: <FaUserPlus />,
        title: "New Customer Registered",
        time: "1 Hour Ago",
        color: "bg-purple-500",
    },
    {
        id: 4,
        icon: <FaShoppingBag />,
        title: "Order Completed",
        time: "2 Hours Ago",
        color: "bg-orange-500",
    },
];

const ActivityCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-6">
                Recent Activity
            </h2>

            <div className="space-y-5">

                {activities.map((activity) => (
                    <div
                        key={activity.id}
                        className="flex items-center gap-4 hover:bg-gray-50 p-3 rounded-xl transition"
                    >

                        <div
                            className={`${activity.color} text-white w-12 h-12 rounded-full flex justify-center items-center text-xl`}
                        >
                            {activity.icon}
                        </div>

                        <div>

                            <h3 className="font-semibold">
                                {activity.title}
                            </h3>

                            <p className="text-gray-500 text-sm">
                                {activity.time}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default ActivityCard;