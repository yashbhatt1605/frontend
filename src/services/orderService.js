import API from "./api";

const orderService = {
    // Get all orders
    getAll: () => API.get("/orders"),

    // Get order by ID
    getById: (id) => API.get(`/orders/${id}`),

    // Create order
    create: (data) => API.post("/orders", data),

    // Update order status
    update: (id, data) => API.put(`/orders/${id}`, data),

    // Delete order
    delete: (id) => API.delete(`/orders/${id}`),

    // User orders
    getMyOrders: () => API.get("/orders/my-orders"),
};

export default orderService;