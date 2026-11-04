import { useEffect, useState } from "react";
import {
  FaSearch,
  FaEye,
  FaTrash,
  FaSyncAlt,
} from "react-icons/fa";

const ORDER_API =
  "https://6ad666dbf71f154ac486d3bc.mockapi.io/Order";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(ORDER_API);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setOrders(data);
      } else if (Array.isArray(data.orders)) {
        setOrders(data.orders);
      } else {
        setOrders([]);
        setError("The API did not return an order list.");
        console.error("Unexpected Order API response:", data);
      }
    } catch (err) {
      setOrders([]);
      setError(err.message || "Unable to load orders.");
      console.error("Order loading error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getValue = (order, keys, fallback = "—") => {
    for (const key of keys) {
      if (
        order[key] !== undefined &&
        order[key] !== null &&
        order[key] !== ""
      ) {
        return order[key];
      }
    }
    return fallback;
  };

  const formatDate = (value) => {
    if (!value || value === "—") return "—";

    let date;

    if (
      typeof value === "number" ||
      /^\d{10,13}$/.test(String(value))
    ) {
      const number = Number(value);
      const milliseconds =
        String(Math.trunc(number)).length <= 10
          ? number * 1000
          : number;

      date = new Date(milliseconds);
    } else {
      date = new Date(value);
    }

    if (Number.isNaN(date.getTime())) return String(value);

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatAmount = (value) => {
    if (value === undefined || value === null || value === "") {
      return "—";
    }

    const amount = Number(value);

    return Number.isNaN(amount)
      ? String(value)
      : `₹${amount.toLocaleString("en-IN")}`;
  };

  const getStatusClass = (status) => {
    switch (String(status || "").toLowerCase()) {
      case "paid":
      case "delivered":
      case "completed":
        return "bg-green-100 text-green-700";

      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "processing":
      case "confirmed":
        return "bg-blue-100 text-blue-700";

      case "shipped":
        return "bg-purple-100 text-purple-700";

      case "failed":
      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredOrders = (
    Array.isArray(orders) ? orders : []
  ).filter((order) => {
    const searchableText = [
      getValue(order, ["orderId", "order_id", "id"], ""),
      getValue(
        order,
        ["customer", "customerName", "customerEmail", "customerEmailId"],
        ""
      ),
      getValue(
        order,
        ["vehicle", "vehicleName", "vehicalName", "productName"],
        ""
      ),
      getValue(order, ["type", "vehicleType", "vehicaltype"], ""),
      getValue(order, ["status", "orderStatus"], ""),
      getValue(order, ["payment", "paymentStatus"], ""),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(search.toLowerCase());
  });

  const deleteOrder = async (order) => {
    if (order.id === undefined || order.id === null) {
      alert("Order ID is missing. Cannot delete this record.");
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete order #${order.id}?`
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${ORDER_API}/${encodeURIComponent(order.id)}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error(`Delete failed: ${response.status}`);
      }

      setOrders((previous) =>
        previous.filter(
          (item) => String(item.id) !== String(order.id)
        )
      );

      if (
        String(selectedOrder?.id) === String(order.id)
      ) {
        setSelectedOrder(null);
      }
    } catch (err) {
      alert(err.message || "Unable to delete order.");
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Order Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage vehicle orders in CarXpress
          </p>
        </div>

        <button
          type="button"
          onClick={fetchOrders}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          <FaSyncAlt />
          Refresh Orders
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search order, customer, vehicle, or status..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table content */}
      {loading ? (
        <div className="py-12 text-center text-gray-500">
          Loading orders...
        </div>
      ) : error ? (
        <div className="py-8 text-center text-red-600">
          <p>{error}</p>
          <button
            type="button"
            onClick={fetchOrders}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "Order ID",
                    "Customer",
                    "Vehicle",
                    "Type",
                    "Amount",
                    "Payment",
                    "Status",
                    "Date",
                    "Actions",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="p-4 text-left text-sm font-semibold text-gray-700"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredOrders.map((order, index) => {
                  const id = getValue(
                    order,
                    ["orderId", "order_id", "id"]
                  );

                  const customer = getValue(order, [
                    "customer",
                    "customerName",
                    "customerEmail",
                    "customerEmailId",
                  ]);

                  const vehicle = getValue(order, [
                    "vehicle",
                    "vehicleName",
                    "vehicalName",
                    "productName",
                  ]);

                  const type = getValue(order, [
                    "type",
                    "vehicleType",
                    "vehicaltype",
                  ]);

                  const amount = getValue(order, [
                    "amount",
                    "totalAmount",
                    "price",
                  ]);

                  const payment = getValue(order, [
                    "payment",
                    "paymentStatus",
                    "payment_status",
                  ]);

                  const status = getValue(order, [
                    "status",
                    "orderStatus",
                  ]);

                  const date = getValue(order, [
                    "date",
                    "orderDate",
                    "bookingData",
                    "createdAt",
                  ]);

                  return (
                    <tr
                      key={order.id ?? `${id}-${index}`}
                      className="border-b transition hover:bg-blue-50"
                    >
                      <td className="p-4 font-semibold text-blue-600">
                        {String(id).startsWith("#")
                          ? id
                          : `#ORD${id}`}
                      </td>

                      <td className="p-4">
                        {customer}
                      </td>

                      <td className="p-4 font-medium text-gray-800">
                        {vehicle}
                      </td>

                      <td className="p-4">
                        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                          {type}
                        </span>
                      </td>

                      <td className="p-4 font-semibold text-green-600">
                        {formatAmount(amount)}
                      </td>

                      <td className="p-4">
                        <span
                          className={`rounded-full px-3 py-1 text-sm ${getStatusClass(payment)}`}
                        >
                          {payment}
                        </span>
                      </td>

                      <td className="p-4">
                        <span
                          className={`rounded-full px-3 py-1 text-sm ${getStatusClass(status)}`}
                        >
                          {status}
                        </span>
                      </td>

                      <td className="p-4">
                        {formatDate(date)}
                      </td>

                      <td className="p-4">
                        <div className="flex justify-center gap-3">
                          <button
                            type="button"
                            title="View order"
                            onClick={() => setSelectedOrder(order)}
                            className="rounded-lg bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-600 hover:text-white"
                          >
                            <FaEye />
                          </button>

                          <button
                            type="button"
                            title="Delete order"
                            onClick={() => deleteOrder(order)}
                            className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-600 hover:text-white"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {filteredOrders.length === 0 && (
                  <tr>
                    <td
                      colSpan={9}
                      className="p-10 text-center text-gray-500"
                    >
                      {search
                        ? "No orders match your search."
                        : "No orders found in the API."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Showing {filteredOrders.length} of {orders.length} orders
          </div>
        </>
      )}

      {/* View order modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">
                Order Details
              </h3>

              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="rounded-lg px-3 py-1 text-2xl text-gray-500 hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            <div className="space-y-3">
              {[
                [
                  "Order ID",
                  getValue(selectedOrder, [
                    "orderId",
                    "order_id",
                    "id",
                  ]),
                ],
                [
                  "Customer",
                  getValue(selectedOrder, [
                    "customer",
                    "customerName",
                    "customerEmail",
                  ]),
                ],
                [
                  "Vehicle",
                  getValue(selectedOrder, [
                    "vehicle",
                    "vehicleName",
                    "vehicalName",
                  ]),
                ],
                [
                  "Type",
                  getValue(selectedOrder, [
                    "type",
                    "vehicleType",
                    "vehicaltype",
                  ]),
                ],
                [
                  "Amount",
                  formatAmount(
                    getValue(selectedOrder, [
                      "amount",
                      "totalAmount",
                      "price",
                    ], "")
                  ),
                ],
                [
                  "Payment",
                  getValue(selectedOrder, [
                    "payment",
                    "paymentStatus",
                  ]),
                ],
                [
                  "Status",
                  getValue(selectedOrder, [
                    "status",
                    "orderStatus",
                  ]),
                ],
                [
                  "Date",
                  formatDate(
                    getValue(selectedOrder, [
                      "date",
                      "orderDate",
                      "bookingData",
                      "createdAt",
                    ], "")
                  ),
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-4 border-b pb-2"
                >
                  <span className="text-gray-500">{label}</span>
                  <span className="break-all text-right font-medium text-gray-800">
                    {value ?? "—"}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedOrder(null)}
              className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTable;