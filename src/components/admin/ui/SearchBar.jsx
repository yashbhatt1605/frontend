import { FaSearch } from "react-icons/fa";

const SearchBar = ({
    value,
    onChange,
    placeholder = "Search...",
}) => {
    return (
        <div className="relative mb-6">

            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border rounded-xl pl-12 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
    );
};

export default SearchBar;