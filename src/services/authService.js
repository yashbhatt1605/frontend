import API from "./api";

const authService = {
    register: (data) => API.post("/auth/register", data),

    login: (data) => API.post("/auth/login", data),

    forgotPassword: (email) =>
        API.post("/auth/forgot-password", { email }),

    resetPassword: (token, password) =>
        API.post(`/auth/reset-password/${token}`, {
            password,
        }),

    getProfile: () => API.get("/auth/profile"),

    updateProfile: (data) =>
        API.put("/auth/profile", data),
};

export default authService;