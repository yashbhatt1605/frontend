import { useEffect, useState } from "react";
import {
  FaSearch,
  FaEye,
  FaTrash,
  FaSyncAlt,
} from "react-icons/fa";

const CUSTOMER_API =
  "https://6ad660cff71f154ac486cea6.mockapi.io/Customers";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(CUSTOMER_API);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setCustomers(data);
      } else if (Array.isArray(data.customers)) {
        setCustomers(data.customers);
      } else {
        console.error("Unexpected Customer API response:", data);
        setCustomers([]);
        setError("The API did not return a customer list.");
      }
    } catch (err) {
      console.error("Customer loading error:", err);
      setCustomers([]);
      setError(err.message || "Unable to load customers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const filteredCustomers = (
    Array.isArray(customers) ? customers : []
  ).filter((customer) => {
    const searchText = [
      customer.name,
      customer.mobile_No,
      customer.emailId,
      customer.id,
    ]
      .map((value) => String(value ?? ""))
      .join(" ")
      .toLowerCase();

    return searchText.includes(search.toLowerCase());
  });

  const deleteCustomer = async (customer) => {
    if (customer.id === undefined || customer.id === null) {
      alert("Customer ID is missing.");
      return;
    }

    if (
      !window.confirm(
        `Are you sure you want to delete ${customer.name || "this customer"}?`
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `${CUSTOMER_API}/${encodeURIComponent(customer.id)}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error(`Delete failed: ${response.status}`);
      }

      setCustomers((previous) =>
        previous.filter(
          (item) => String(item.id) !== String(customer.id)
        )
      );

      if (
        String(selectedCustomer?.id) === String(customer.id)
      ) {
        setSelectedCustomer(null);
      }
    } catch (err) {
      alert(err.message || "Unable to delete customer.");
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Customer Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your CarXpress customers
          </p>
        </div>

        <button
          type="button"
          onClick={fetchCustomers}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          <FaSyncAlt />
          Refresh
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search name, mobile, email, or ID..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-xl border px-4 py-3 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Content */}
      {loading ? (
        <div className="py-12 text-center text-gray-500">
          Loading customers...
        </div>
      ) : error ? (
        <div className="py-8 text-center text-red-600">
          <p>{error}</p>
          <button
            type="button"
            onClick={fetchCustomers}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Customer ID</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Mobile Number</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredCustomers.map((customer, index) => (
                  <tr
                    key={customer.id ?? `${customer.emailId}-${index}`}
                    className="border-b transition hover:bg-blue-50"
                  >
                    <td className="p-4 font-semibold text-blue-600">
                      #{customer.id ?? "—"}
                    </td>

                    <td className="p-4 font-medium text-gray-800">
                      {customer.name || "—"}
                    </td>

                    <td className="p-4">
                      {customer.mobile_No || "—"}
                    </td>

                    <td className="p-4">
                      {customer.emailId || "—"}
                    </td>

                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button
                          type="button"
                          title="View customer"
                          onClick={() => setSelectedCustomer(customer)}
                          className="rounded-lg bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-600 hover:text-white"
                        >
                          <FaEye />
                        </button>

                        <button
                          type="button"
                          title="Delete customer"
                          onClick={() => deleteCustomer(customer)}
                          className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-600 hover:text-white"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredCustomers.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-10 text-center text-gray-500"
                    >
                      {search
                        ? "No customers match your search."
                        : "No customers found in MockAPI."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Showing {filteredCustomers.length} of {customers.length} customers
          </div>
        </>
      )}

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">
                Customer Details
              </h3>

              <button
                type="button"
                onClick={() => setSelectedCustomer(null)}
                className="rounded-lg px-3 py-1 text-2xl text-gray-500 hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {[
                ["Customer ID", selectedCustomer.id],
                ["Name", selectedCustomer.name],
                ["Mobile", selectedCustomer.mobile_No],
                ["Email", selectedCustomer.emailId],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-4 border-b pb-3"
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
              onClick={() => setSelectedCustomer(null)}
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

export default CustomerTable;