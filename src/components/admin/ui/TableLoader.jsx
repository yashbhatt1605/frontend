const TableLoader = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">

            <div className="h-10 bg-gray-200 rounded mb-6"></div>

            {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                    key={item}
                    className="grid grid-cols-6 gap-4 mb-4"
                >

                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>

                </div>
            ))}

        </div>
    );
};

export default TableLoader;