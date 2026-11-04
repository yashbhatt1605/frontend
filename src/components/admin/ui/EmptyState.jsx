import { FaDatabase } from "react-icons/fa";

const EmptyState = ({
    title = "No Data Found",
    subtitle = "There are no records available.",
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg py-20 text-center">

            <FaDatabase
                size={70}
                className="mx-auto text-gray-300"
            />

            <h2 className="text-2xl font-bold mt-5">
                {title}
            </h2>

            <p className="text-gray-500 mt-3">
                {subtitle}
            </p>

        </div>
    );
};

export default EmptyState;