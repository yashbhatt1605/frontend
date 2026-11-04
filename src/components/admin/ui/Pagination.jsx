const Pagination = () => {
    return (
        <div className="flex justify-between items-center mt-6">

            <p className="text-gray-500">
                Showing 1 to 10 of 100 Entries
            </p>

            <div className="flex gap-2">

                <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    Prev
                </button>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    1
                </button>

                <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    2
                </button>

                <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    3
                </button>

                <button className="border px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    Next
                </button>

            </div>

        </div>
    );
};

export default Pagination;