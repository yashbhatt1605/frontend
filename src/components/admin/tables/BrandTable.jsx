import React, { useState } from "react";

export default function BrandTable() {
  const [brands, setBrands] = useState([
    { id: 1, name: "TATA", description: "Indian automotive brand" },
    { id: 2, name: "Mercedes-Benz", description: "Luxury automobile brand" },
    { id: 3, name: "Audi", description: "Premium automobile brand" },
    { id: 4, name: "Citroen", description: "Automobile manufacturer" },
  ]);

  const [search, setSearch] = useState("");
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!brandName.trim()) {
      alert("Please enter a brand name.");
      return;
    }

    if (editingId !== null) {
      setBrands((prev) =>
        prev.map((brand) =>
          brand.id === editingId
            ? { ...brand, name: brandName.trim(), description: description.trim() }
            : brand
        )
      );
      setEditingId(null);
    } else {
      setBrands((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: brandName.trim(),
          description: description.trim(),
        },
      ]);
    }

    setBrandName("");
    setDescription("");
  };

  const handleEdit = (brand) => {
    setEditingId(brand.id);
    setBrandName(brand.name);
    setDescription(brand.description);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this brand?")) {
      setBrands((prev) => prev.filter((brand) => brand.id !== id));
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <div>
          <h2 className="font-weight-bold mb-1">Brand Management</h2>
          <p className="text-muted mb-0">Manage your vehicle brands</p>
        </div>
        <span className="badge badge-primary p-2">
          Total Brands: {brands.length}
        </span>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-header bg-white">
          <h5 className="mb-0">
            {editingId !== null ? "Edit Brand" : "Add New Brand"}
          </h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label htmlFor="brandName">Brand Name</label>
                <input
                  id="brandName"
                  type="text"
                  className="form-control"
                  placeholder="Enter brand name"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-5">
                <label htmlFor="brandDescription">Description</label>
                <input
                  id="brandDescription"
                  type="text"
                  className="form-control"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-primary btn-block mb-3">
                  {editingId !== null ? "Update" : "Add Brand"}
                </button>
              </div>
            </div>
            {editingId !== null && (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setEditingId(null);
                  setBrandName("");
                  setDescription("");
                }}
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="mb-2 mb-md-0">All Brands</h5>
            </div>
            <div className="col-md-6">
              <input
                type="search"
                className="form-control"
                placeholder="Search brands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Brand Name</th>
                <th>Description</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBrands.length > 0 ? (
                filteredBrands.map((brand, index) => (
                  <tr key={brand.id}>
                    <td>{index + 1}</td>
                    <td className="font-weight-bold">{brand.name}</td>
                    <td>{brand.description || "—"}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mr-2"
                        onClick={() => handleEdit(brand)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(brand.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-4">
                    No brands found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}