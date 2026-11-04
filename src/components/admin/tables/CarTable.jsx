import React, { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import CarModal from "./CarModal";
import formatCurrency from "../../../Utils/formatCurrency";

const CAR_API =
  "https://6a6199ceda10c59c1809a1eb.mockapi.io/cardetaild/cardetails";

const emptyCar = {
  brand: "",
  name: "",
  price: "",
  year: "",
  engine: "",
  fuel: "",
  transmission: "",
  color: "",
  mileage: "",
  type: "",
  status: "Available",
  image: "",
};

const CarTable = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [busyId, setBusyId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(emptyCar);

  const fetchCars = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(CAR_API);
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error("Invalid car data received");
      setCars(data);
    } catch (err) {
      setError(err.message || "Unable to load cars.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({ ...emptyCar });
    setShowModal(true);
  };

  const openEditModal = (car) => {
    setIsEditing(true);
    setFormData({ ...emptyCar, ...car });
    setShowModal(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const isUpdate = isEditing && formData.id !== undefined;
      const url = isUpdate
        ? `${CAR_API}/${encodeURIComponent(formData.id)}`
        : CAR_API;
      const response = await fetch(url, {
        method: isUpdate ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Unable to save car. Please try again.");
      setShowModal(false);
      await fetchCars();
    } catch (err) {
      window.alert(err.message || "Unable to save car.");
    }
  };

  const handleDelete = async (car) => {
    const label = [car.brand, car.name].filter(Boolean).join(" ") || "this car";
    if (!window.confirm(`Delete ${label}? This action cannot be undone.`)) return;
    try {
      setBusyId(car.id);
      const response = await fetch(`${CAR_API}/${encodeURIComponent(car.id)}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Unable to delete car. Please try again.");
      setCars((current) => current.filter((item) => String(item.id) !== String(car.id)));
    } catch (err) {
      window.alert(err.message || "Unable to delete car.");
    } finally {
      setBusyId(null);
    }
  };

  const query = search.trim().toLowerCase();
  const filteredCars = cars.filter((car) =>
    [car.brand, car.name, car.fuel, car.transmission]
      .some((value) => String(value ?? "").toLowerCase().includes(query))
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Car Management</h2>
        <button className="add-btn" onClick={openAddModal} type="button">
          <FaPlus /> Add Car
        </button>
      </div>

      <div className="admin-table-toolbar">
        <input
          type="search"
          placeholder="Search cars by brand, model, fuel or transmission..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search cars"
        />
      </div>

      {error && (
        <div className="admin-error" role="alert">
          <span>{error}</span>
          <button type="button" onClick={fetchCars}>Retry</button>
        </div>
      )}

      {loading ? (
        <p className="admin-table-message">Loading cars…</p>
      ) : (
        <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th><th>Brand</th><th>Model</th><th>Price</th>
                <th>Fuel</th><th>Transmission</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.length === 0 ? (
                <tr><td colSpan="8" className="admin-table-message">No cars found.</td></tr>
              ) : filteredCars.map((car) => (
                <tr key={car.id}>
                  <td>
                    {car.image ? (
                      <img src={car.image} alt={car.name || "Car"} className="table-image"
                        onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} />
                    ) : "—"}
                  </td>
                  <td>{car.brand || "—"}</td>
                  <td>{car.name || "—"}</td>
                  <td>{formatCurrency(car.price ?? car.Price ?? car.amount ?? car.cost)}</td>
                  <td>{car.fuel || "—"}</td>
                  <td>{car.transmission || "—"}</td>
                  <td><span className="status">{car.status || "Available"}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button type="button" className="edit-btn" title="Edit car" aria-label={`Edit ${car.name || "car"}`}
                        onClick={() => openEditModal(car)}><FaEdit /></button>
                      <button type="button" className="delete-btn" title="Delete car" aria-label={`Delete ${car.name || "car"}`}
                        disabled={busyId === car.id} onClick={() => handleDelete(car)}><FaTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <CarModal
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
      />
    </div>
  );
};

export default CarTable;
