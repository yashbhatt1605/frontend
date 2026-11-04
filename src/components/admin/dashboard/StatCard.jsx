import { motion } from "framer-motion";

const StatCard = ({
    title,
    value,
    icon,
    color = "bg-blue-600",
    percentage,
}) => {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center"
        >
            <div>
                <h4 className="text-gray-500 text-sm font-semibold">
                    {title}
                </h4>

                <h2 className="text-3xl font-bold mt-2">
                    {value}
                </h2>

                <p className="text-green-600 mt-2 font-semibold">
                    ▲ {percentage}
                </p>
            </div>

            <div
                className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg`}
            >
                {icon}
            </div>
        </motion.div>
    );
};

export default StatCard;