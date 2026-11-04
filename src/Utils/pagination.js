const paginate = (items, page = 1, limit = 10) => {
    const start = (page - 1) * limit;
    const end = start + limit;

    return items.slice(start, end);
};

export default paginate;
