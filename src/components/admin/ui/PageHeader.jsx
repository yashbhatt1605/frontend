import { FaPlus } from "react-icons/fa";

const PageHeader = ({
    title,
    subtitle,
    buttonText,
    onClick,
}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    {title}
                </h1>

                <p className="text-gray-500 mt-1">
                    {subtitle}
                </p>
            </div>

            {buttonText && (
                <button
                    onClick={onClick}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                    <FaPlus />
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default PageHeader;