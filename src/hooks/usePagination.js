import { useState } from "react";

const usePagination = (items = [], itemsPerPage = 6) => {
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    const currentItems = items.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return {
        currentItems,
        currentPage,
        totalPages,
        nextPage,
        previousPage,
        setCurrentPage,
    };
};

export default usePagination;