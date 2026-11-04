import React from "react";
import { FaTimes } from "react-icons/fa";

const BikeModal = ({
    showModal,
    setShowModal,
    formData,
    handleChange,
    handleSubmit,
    isEditing,
}) => {
    if (!showModal) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-box">

                <div className="modal-header">
                    <h2>{isEditing ? "Edit Bike" : "Add Bike"}</h2>

                    <button
                        className="close-btn"
                        onClick={() => setShowModal(false)}
                    >
                        <FaTimes />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-grid">

                        <input
                            type="text"
                            name="brand"
                            placeholder="Brand"
                            value={formData.brand}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="name"
                            placeholder="Bike Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="engine"
                            placeholder="Engine"
                            value={formData.engine}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="fuel"
                            placeholder="Fuel"
                            value={formData.fuel}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="transmission"
                            placeholder="Transmission"
                            value={formData.transmission}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="color"
                            placeholder="Color"
                            value={formData.color}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="topSpeed"
                            placeholder="Top Speed"
                            value={formData.topSpeed}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="fuelTank"
                            placeholder="Fuel Tank"
                            value={formData.fuelTank}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="type"
                            placeholder="Type"
                            value={formData.type}
                            onChange={handleChange}
                        />

                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="Available">Available</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>

                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            value={formData.image}
                            onChange={handleChange}
                        />

                    </div>

                    {formData.image && (
                        <div
                            style={{
                                marginTop: 20,
                                textAlign: "center",
                            }}
                        >
                            <img
                                src={formData.image}
                                alt="Preview"
                                style={{
                                    width: 220,
                                    height: 140,
                                    objectFit: "cover",
                                    borderRadius: 10,
                                }}
                            />
                        </div>
                    )}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: 25,
                            gap: 10,
                        }}
                    >
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            {isEditing ? "Update Bike" : "Add Bike"}
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default BikeModal;