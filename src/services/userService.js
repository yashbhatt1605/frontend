import API from "./api";

const userService = {
    // Get all users
    getAll: () => API.get("/users"),

    // Get user by ID
    getById: (id) => API.get(`/users/${id}`),

    // Update user
    update: (id, data) => API.put(`/users/${id}`, data),

    // Delete user
    delete: (id) => API.delete(`/users/${id}`),

    // Change password
    changePassword: (data) =>
        API.put("/users/change-password", data),

    // Update profile
    updateProfile: (data) =>
        API.put("/users/profile", data),
};

export default userService;