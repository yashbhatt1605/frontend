
import React, { useEffect, useState } from "react";

const API_URL =
  "https://6a6199ceda10c59c1809a1eb.mockapi.io/cardetaild/cardetails";

export default function CarTable() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchCars = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();

      if (!Array.isArray(result)) {
        throw new Error("Invalid API response");
      }

      setCars(result);
    } catch (err) {
      setError(err.message || "Failed to load cars");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);



  const filteredCars = cars.filter((car) =>
    `${car.name || ""} ${car.brand || ""} ${car.price || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const styles = {
    page: {
      padding: "24px",
      fontFamily: "Arial, sans-serif",
      color: "#1e293b",
      background: "#f8fafc",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
      marginBottom: "20px",
    },
    search: {
      padding: "11px 14px",
      border: "1px solid #cbd5e1",
      borderRadius: "8px",
      width: "260px",
      maxWidth: "100%",
      boxSizing: "border-box",
    },
    button: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "7px",
      background: "#2563eb",
      color: "white",
      cursor: "pointer",
    },
    tableWrap: {
      overflowX: "auto",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    },
    table: {
      width: "100%",
      minWidth: "750px",
      borderCollapse: "collapse",
      textAlign: "left",
    },
    th: {
      padding: "15px 12px",
      background: "#0f172a",
      color: "white",
      whiteSpace: "nowrap",
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #e2e8f0",
    },
    image: {
      width: "100px",
      height: "65px",
      objectFit: "cover",
      borderRadius: "6px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={{ margin: "0 0 8px" }}>Car Management</h1>
          <p style={{ margin: 0, color: "#64748b" }}>
            Total Cars: {filteredCars.length}
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            style={styles.search}
            type="text"
            placeholder="Search by name or brand..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button style={styles.button} onClick={fetchCars}>
            Refresh
          </button>
        </div>
      </div>

      {loading && <p>Loading cars...</p>}

      {error && (
        <div style={{ color: "#dc2626", margin: "20px 0" }}>
          <p>Error: {error}</p>
          <button style={styles.button} onClick={fetchCars}>
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && (
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Image</th>
                <th style={styles.th}>Brand</th>
                <th style={styles.th}>Model</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Fuel</th>
                <th style={styles.th}>Transmission</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredCars.map((car, index) => (
                <tr key={car.id || `${car.name}-${index}`}>
                  <td style={styles.td}>
                    {car.image ? (
                      <img
                        src={car.image}
                        alt={car.name || "Car"}
                        style={styles.image}
                      />
                    ) : (
                      "No image"
                    )}
                  </td>

                  <td style={styles.td}>{car.brand || "N/A"}</td>
                  <td style={styles.td}>{car.name?.trim() || "N/A"}</td>
                  <td style={styles.td}>{car.price || "N/A"}</td>
                  <td style={styles.td}>{car.fuel || "N/A"}</td>
                  <td style={styles.td}>
                    {car.transmission || "N/A"}
                  </td>
                  <td style={styles.td}>
                    {car.status || "Available"}
                  </td>
                </tr>
              ))}

              {filteredCars.length === 0 && (
                <tr>
                  <td
                    style={{ ...styles.td, textAlign: "center" }}
                    colSpan="7"
                  >
                    No cars found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
