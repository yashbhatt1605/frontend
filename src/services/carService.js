import API from "./api";

const carService = {
    getAll: () => API.get("/cars"),

    getById: (id) => API.get(`/cars/${id}`),

    create: (data) => API.post("/cars", data),

    update: (id, data) =>
        API.put(`/cars/${id}`, data),

};

export default carService;