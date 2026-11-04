const StatsBox = ({
    title,
    value,
    icon,
    color = "bg-blue-500",
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition duration-300">

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-gray-500">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {value}
                    </h2>

                </div>

                <div className={`${color} p-5 rounded-full text-white text-2xl`}>
                    {icon}
                </div>

            </div>

        </div>
    );
};

export default StatsBox;