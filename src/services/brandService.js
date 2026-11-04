import API from "./api";

const brandService = {
    // Get all brands
    getAll: () => API.get("/brands"),

    // Get brand by ID
    getById: (id) => API.get(`/brands/${id}`),

    // Create new brand
    create: (data) => API.post("/brands", data),

    // Update brand
    update: (id, data) => API.put(`/brands/${id}`, data),

    // Delete brand
    delete: (id) => API.delete(`/brands/${id}`),
};

export default brandService;