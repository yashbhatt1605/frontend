
import { useState } from "react";
import formatCurrency from "../../Utils/formatCurrency";
import {
  FaCar,
  FaMotorcycle,
  FaCalendarCheck,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

const BOOKING_API =
  "https://6ad6625af71f154ac486cfd9.mockapi.io/Booking";

const ORDER_API =
  "https://6ad666dbf71f154ac486d3bc.mockapi.io/Order";

const ProductCard = ({
  id,
  image,
  name,
  brand,
  price,
  type = "car",
}) => {
  const [showForm, setShowForm] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isBike = type === "bike";

  const formatPrice = (value) => formatCurrency(value);

  const submitRequest = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    const api = isBike ? ORDER_API : BOOKING_API;
    const now = new Date().toISOString();

    const record = {
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim(),
      phone: phone.trim(),
      vehicleId: String(id ?? ""),
      vehicleName: name || "Unknown vehicle",
      vehicalName: name || "Unknown vehicle",
      vehicleType: isBike ? "Bike" : "Car",
      vehicaltype: isBike ? "Bike" : "Car",
      brand: brand || "",
      amount: Number(String(price ?? "").replace(/[^0-9.-]/g, "")) || 0,
      price: Number(String(price ?? "").replace(/[^0-9.-]/g, "")) || 0,
      status: "Pending",
      paymentStatus: "Pending",
      payment: "Pending",
      bookingData: now,
      orderDate: now,
      createdAt: now,
    };

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });

      if (!response.ok) {
        throw new Error("The request could not be saved. Please try again.");
      }

      await response.json();

      setMessage(
        isBike
          ? "Purchase request submitted successfully!"
          : "Booking request submitted successfully!"
      );

      setCustomerName("");
      setCustomerEmail("");
      setPhone("");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <article className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-56 items-center justify-center overflow-hidden bg-gray-100">
          {image ? (
            <img
              src={image}
              alt={name || "Vehicle"}
              className="h-full w-full object-contain p-3 transition duration-300 hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-gray-400">
              {isBike ? (
                <FaMotorcycle size={54} />
              ) : (
                <FaCar size={54} />
              )}
              <span>Image unavailable</span>
            </div>
          )}
        </div>

        <div className="p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            {brand || (isBike ? "Motorcycle" : "Automobile")}
          </p>

          <h2 className="mt-2 line-clamp-2 min-h-14 text-xl font-bold text-gray-900">
            {name || "Unnamed Vehicle"}
          </h2>

          <p className="mt-3 text-2xl font-extrabold text-gray-900">
            {formatPrice(price)}
          </p>

          <button
            type="button"
            onClick={() => {
              setError("");
              setMessage("");
              setShowForm(true);
            }}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-bold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {isBike ? <FaShoppingCart /> : <FaCalendarCheck />}
            {isBike ? "Purchase Now" : "Book Now"}
          </button>
        </div>
      </article>

      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !loading) {
              setShowForm(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="vehicle-action-title"
            className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  CarXpress
                </p>
                <h2
                  id="vehicle-action-title"
                  className="mt-2 text-2xl font-extrabold text-gray-900"
                >
                  {isBike ? "Purchase Request" : "Book Your Car"}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  {name} {brand ? `· ${brand}` : ""}
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {formatPrice(price)}
                </p>
              </div>

              <button
                type="button"
                aria-label="Close form"
                disabled={loading}
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-black disabled:opacity-50"
              >
                <FaTimes />
              </button>
            </div>

            {message ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <p className="font-bold text-green-800">{message}</p>
                <p className="mt-2 text-sm text-green-700">
                  Your request has been recorded. The showroom team can review
                  it in the admin panel.
                </p>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mt-5 rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submitRequest} className="space-y-4">
                <div>
                  <label
                    htmlFor={`customer-name-${id}`}
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id={`customer-name-${id}`}
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`customer-email-${id}`}
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id={`customer-email-${id}`}
                    type="email"
                    required
                    maxLength={150}
                    autoComplete="email"
                    value={customerEmail}
                    onChange={(event) => setCustomerEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`customer-phone-${id}`}
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id={`customer-phone-${id}`}
                    type="tel"
                    required
                    minLength={7}
                    maxLength={20}
                    autoComplete="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Enter your contact number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                {error && (
                  <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-bold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Submitting..."
                    : isBike
                      ? "Submit Purchase Request"
                      : "Confirm Booking Request"}
                </button>

                <p className="text-xs leading-5 text-gray-500">
                  This submits a request, not a payment or a confirmed sale.
                  The showroom must confirm the request.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
