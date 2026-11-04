import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import BikeModal from "./BikeModal";
import formatCurrency from "../../../Utils/formatCurrency";
import { getBikes, addBike, updateBike, deleteBike } from "./BikeService";

const emptyBike = {
  brand: "",
  name: "",
  price: "",
  engine: "",
  fuel: "",
  transmission: "",
  color: "",
  topSpeed: "",
  fuelTank: "",
  type: "",
  status: "Available",
  image: "",
};

const BikeTable = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(emptyBike);

  const fetchAllBikes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getBikes();
      setBikes(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Unable to fetch bikes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBikes();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({ ...emptyBike });
    setShowModal(true);
  };

  const openEditModal = (bike) => {
    setIsEditing(true);
    setFormData({ ...emptyBike, ...bike });
    setShowModal(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        ...formData,
        price: String(formData.price ?? "").trim(),
      };
      if (isEditing) await updateBike(formData.id, payload);
      else await addBike(payload);
      setShowModal(false);
      await fetchAllBikes();
    } catch (err) {
      window.alert(err.message || "Unable to save bike.");
    }
  };

  const handleDelete = async (bike) => {
    const label = [bike.brand, bike.name].filter(Boolean).join(" ") || "this bike";
    if (!window.confirm(`Delete ${label}? This action cannot be undone.`)) return;
    try {
      setBusyId(bike.id);
      await deleteBike(bike.id);
      setBikes((current) => current.filter((item) => String(item.id) !== String(bike.id)));
    } catch (err) {
      window.alert(err.message || "Unable to delete bike.");
    } finally {
      setBusyId(null);
    }
  };

  const query = search.trim().toLowerCase();
  const filteredBikes = bikes.filter((bike) =>
    [bike.brand, bike.name, bike.engine, bike.fuel]
      .some((value) => String(value ?? "").toLowerCase().includes(query))
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Bike Management</h2>
        <button className="add-btn" onClick={openAddModal} type="button">
          <FaPlus /> Add Bike
        </button>
      </div>

      <div className="admin-table-toolbar">
        <FaSearch aria-hidden="true" />
        <input
          type="search"
          placeholder="Search bikes by brand, name, engine or fuel..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search bikes"
        />
      </div>

      {error && (
        <div className="admin-error" role="alert">
          <span>{error}</span>
          <button type="button" onClick={fetchAllBikes}>Retry</button>
        </div>
      )}

      {loading ? (
        <p className="admin-table-message">Loading bikes…</p>
      ) : (
        <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th><th>Brand</th><th>Name</th><th>Price</th>
                <th>Engine</th><th>Fuel</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBikes.length === 0 ? (
                <tr><td colSpan="8" className="admin-table-message">No bikes found.</td></tr>
              ) : filteredBikes.map((bike) => (
                <tr key={bike.id}>
                  <td>
                    {bike.image ? (
                      <img src={bike.image} alt={bike.name || "Bike"} className="table-image"
                        onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} />
                    ) : "—"}
                  </td>
                  <td>{bike.brand || "—"}</td>
                  <td>{bike.name || "—"}</td>
                  <td>{formatCurrency(bike.price ?? bike.Price ?? bike.amount ?? bike.cost)}</td>
                  <td>{bike.engine || "—"}</td>
                  <td>{bike.fuel || "—"}</td>
                  <td><span className="status">{bike.status || "Available"}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button type="button" className="edit-btn" title="Edit bike" aria-label={`Edit ${bike.name || "bike"}`}
                        onClick={() => openEditModal(bike)}><FaEdit /></button>
                      <button type="button" className="delete-btn" title="Delete bike" aria-label={`Delete ${bike.name || "bike"}`}
                        disabled={busyId === bike.id} onClick={() => handleDelete(bike)}>
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <BikeModal
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

export default BikeTable;
