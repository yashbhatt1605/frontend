import API from "./api";

const bikeService = {
    getAll: () => API.get("/bikes"),

    getById: (id) => API.get(`/bikes/${id}`),

    create: (data) => API.post("/bikes", data),

    update: (id, data) =>
        API.put(`/bikes/${id}`, data),

};

export default bikeService;