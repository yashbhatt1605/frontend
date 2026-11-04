const searchFilter = (items, keyword) => {
    if (!keyword) return items;

    return items.filter((item) =>
        Object.values(item).some((value) =>
            String(value)
                .toLowerCase()
                .includes(keyword.toLowerCase())
        )
    );
};

export default searchFilter;