import API from "./api";

const categoryService = {
    // Get all categories
    getAll: () => API.get("/categories"),

    // Get category by ID
    getById: (id) => API.get(`/categories/${id}`),

    // Create category
    create: (data) => API.post("/categories", data),

    // Update category
    update: (id, data) => API.put(`/categories/${id}`, data),

    // Delete category
    delete: (id) => API.delete(`/categories/${id}`),
};

export default categoryService;