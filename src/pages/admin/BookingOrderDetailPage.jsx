
import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const BOOKING_API =
  "https://6ad6625af71f154ac486cfd9.mockapi.io/Booking";

const ORDER_API =
  "https://6ad666dbf71f154ac486d3bc.mockapi.io/Order";

const LOCAL_API = "http://localhost:5000/api";

const formatValue = (value) => {
  if (value === null || value === undefined || value === "") {
    return "N/A";
  }

  if (typeof value === "object") {
    return (
      value.name ||
      value.fullName ||
      value.email ||
      value.id ||
      "N/A"
    );
  }

  return String(value);
};

const recordCustomer = (record) => {
  return (
    formatValue(record?.customerName) !== "N/A"
      ? formatValue(record.customerName)
      : formatValue(record?.customerEmail) !== "N/A"
      ? formatValue(record.customerEmail)
      : formatValue(record?.customer) !== "N/A"
      ? formatValue(record.customer)
      : formatValue(record?.name)
  );
};

const recordVehicle = (record) => {
  return (
    record?.vehicleName ||
    record?.vehicalName ||
    record?.carName ||
    record?.bikeName ||
    record?.productName ||
    record?.name ||
    "N/A"
  );
};

const recordAmount = (record) => {
  const amount = record?.amount ?? record?.price ?? record?.totalAmount;

  if (amount === null || amount === undefined || amount === "") {
    return "N/A";
  }

  const numericAmount = Number(amount);

  return Number.isNaN(numericAmount)
    ? formatValue(amount)
    : `₹${numericAmount.toLocaleString("en-IN")}`;
};

const InfoCard = ({ label, value }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
    <p className="mb-1 text-sm text-gray-500">{label}</p>
    <p className="break-words font-semibold text-gray-900">
      {formatValue(value)}
    </p>
  </div>
);

const StatusBadge = ({ value }) => {
  const status = formatValue(value);
  const normalized = status.toLowerCase();

  let colors = "bg-gray-100 text-gray-700";

  if (
    ["confirmed", "completed", "paid", "delivered", "approved"].includes(
      normalized
    )
  ) {
    colors = "bg-green-100 text-green-700";
  } else if (
    ["cancelled", "canceled", "failed", "rejected"].includes(normalized)
  ) {
    colors = "bg-red-100 text-red-700";
  } else if (
    ["pending", "processing", "unpaid"].includes(normalized)
  ) {
    colors = "bg-yellow-100 text-yellow-800";
  }

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors}`}>
      {status}
    </span>
  );
};

export default function AdminBookingOrderDetailPage() {
  const location = useLocation();
  const { id } = useParams();

  const isOrder =
    location.pathname === "/admin/orders" ||
    location.pathname.startsWith("/admin/order-details/") ||
    location.pathname.startsWith("/admin/orders/");

  const isCustomerPage = location.pathname.startsWith("/admin/customers");

  const api = isCustomerPage
    ? `${LOCAL_API}/customers`
    : isOrder
    ? ORDER_API
    : BOOKING_API;

  const pageTitle = isCustomerPage
    ? "Customer Details"
    : isOrder
    ? "Order Details"
    : "Booking Details";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const url = id ? `${api}/${encodeURIComponent(id)}` : api;
      const headers = {};

      if (isCustomerPage) {
        const token =
          localStorage.getItem("token") ||
          localStorage.getItem("authToken");

        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }
      }

      const response = await fetch(url, { headers });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error(
            "Unauthorized. Please sign in again or check the admin authentication token."
          );
        }

        throw new Error(`Request failed with status ${response.status}.`);
      }

      const data = await response.json();

      if (id) {
        const record = Array.isArray(data) ? data[0] : data;
        setItems(record ? [record] : []);
      } else {
        const records = Array.isArray(data)
          ? data
          : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data?.customers)
          ? data.customers
          : Array.isArray(data?.bookings)
          ? data.bookings
          : Array.isArray(data?.orders)
          ? data.orders
          : [];

        setItems(records);
      }
    } catch (err) {
      setItems([]);
      setError(err.message || "Unable to load records.");
    } finally {
      setLoading(false);
    }
  }, [api, id, isCustomerPage]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const detailBase = isCustomerPage
    ? "/admin/customers"
    : isOrder
    ? "/admin/order-details"
    : "/admin/booking-details";

  const listPath = isCustomerPage
    ? "/admin/customers"
    : isOrder
    ? "/admin/orders"
    : "/admin/bookings";

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="mb-1 text-sm text-gray-500">CarXpress Admin</p>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {id ? ` ${pageTitle}` : `All ${pageTitle.replace(" Details", "s")}`}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={fetchItems}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              Refresh
            </button>

            {id && (
              <Link
                to={listPath}
                className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
              >
                Back to List
              </Link>
            )}
          </div>
        </div>

        {loading && (
          <div className="rounded-xl border bg-white p-8 text-center text-gray-500">
            Loading records...
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">
            <p className="font-semibold">Unable to load data</p>
            <p className="mt-1 text-sm">{error}</p>
            {isCustomerPage && (
              <p className="mt-2 text-sm">
                Check that your login stores a valid token and that your
                backend admin/customer route accepts it.
              </p>
            )}
            <button
              type="button"
              onClick={fetchItems}
              className="mt-4 rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="rounded-xl border bg-white p-8 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              No records found
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              New {isCustomerPage ? "customers" : isOrder ? "orders" : "bookings"} will appear here when saved successfully.
            </p>
          </div>
        )}

        {!loading && !error && items.length > 0 && !id && (
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[850px] border-collapse text-left text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">ID</th>
                  <th className="px-5 py-4 font-semibold">Customer</th>
                  <th className="px-5 py-4 font-semibold">Vehicle</th>
                  <th className="px-5 py-4 font-semibold">Amount</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold">Date</th>
                  <th className="px-5 py-4 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {items.map((record, index) => {
                  const recordId = record?.id ?? record?._id;
                  const status =
                    record?.status ||
                    record?.bookingStatus ||
                    record?.orderStatus ||
                    "Pending";
                  const date =
                    record?.bookingData ||
                    record?.orderDate ||
                    record?.createdAt ||
                    record?.date;

                  return (
                    <tr key={recordId ?? index} className="hover:bg-gray-50">
                      <td className="px-5 py-4 font-medium text-gray-800">
                        {formatValue(recordId)}
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-medium text-gray-900">
                          {recordCustomer(record)}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {formatValue(record?.customerEmail || record?.email)}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-medium text-gray-900">
                          {formatValue(recordVehicle(record))}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {formatValue(record?.vehicleType || record?.vehicaltype)}
                        </p>
                      </td>
                      <td className="px-5 py-4">{recordAmount(record)}</td>
                      <td className="px-5 py-4">
                        <StatusBadge value={status} />
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {date ? formatValue(date) : "N/A"}
                      </td>
                      <td className="px-5 py-4">
                        {recordId !== undefined && recordId !== null ? (
                          <Link
                            to={`${detailBase}/${encodeURIComponent(recordId)}`}
                            className="inline-flex rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white hover:bg-gray-700"
                          >
                            View Details
                          </Link>
                        ) : (
                          <span className="text-xs text-gray-400">
                            No ID available
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!loading && !error && id && items.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard label="Record ID" value={items[0]?.id ?? items[0]?._id} />
            <InfoCard label="Customer Name" value={recordCustomer(items[0])} />
            <InfoCard
              label="Customer Email"
              value={items[0]?.customerEmail || items[0]?.email}
            />
            <InfoCard label="Phone" value={items[0]?.phone || items[0]?.mobile} />
            <InfoCard label="Vehicle" value={recordVehicle(items[0])} />
            <InfoCard
              label="Vehicle Type"
              value={items[0]?.vehicleType || items[0]?.vehicaltype}
            />
            <InfoCard label="Brand" value={items[0]?.brand} />
            <InfoCard label="Amount" value={recordAmount(items[0])} />

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="mb-2 text-sm text-gray-500">Status</p>
              <StatusBadge
                value={
                  items[0]?.status ||
                  items[0]?.bookingStatus ||
                  items[0]?.orderStatus ||
                  "Pending"
                }
              />
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="mb-2 text-sm text-gray-500">Payment Status</p>
              <StatusBadge
                value={
                  items[0]?.paymentStatus ||
                  items[0]?.payment ||
                  "Pending"
                }
              />
            </div>

            <InfoCard
              label="Date"
              value={
                items[0]?.bookingData ||
                items[0]?.orderDate ||
                items[0]?.createdAt ||
                items[0]?.date
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
