import axios from "axios";

const MOCKAPI_URL =
    "https://6a6199ceda10c59c1809a1eb.mockapi.io/bikesdetails/bikesdetails";

const bikeService = {
    getAll: () => axios.get(MOCKAPI_URL),

    getById: (id) => axios.get(`${MOCKAPI_URL}/${id}`),

    create: (data) => axios.post(MOCKAPI_URL, data),

    update: (id, data) =>
        axios.put(`${MOCKAPI_URL}/${id}`, data),
};

export default bikeService;