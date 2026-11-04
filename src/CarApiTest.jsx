
import React, { useEffect, useState } from "react";

function CarApiTest() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://6a6199ceda10c59c1809a1eb.mockapi.io/cardetaild/cardetails")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
        return response.json();
      })
      .then((result) => setCars(result))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Car API Test</h1>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!error && <h3>Total Cars: {cars.length}</h3>}

      {cars.map((car, index) => (
        <div key={car.id || index}>
          <h3>{car.name}</h3>
          <p>{car.brand}</p>
          <p>{car.price}</p>
          <img src={car.image} alt={car.name} width="200" />
        </div>
      ))}
    </div>
  );
}

export default CarApiTest;
