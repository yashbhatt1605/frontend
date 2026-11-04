
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaMotorcycle,
  FaGasPump,
  FaCogs,
  FaPalette,
  FaTachometerAlt,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import "./VehicleDetails.css";

const API_URL =
  "https://6a6212aa1bffb2ffab8ae502.mockapi.io/bikesdetails/bikesdetails";

const BikeDetails = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBike = async () => {
      try {
        setLoading(true);
        setError("");

        let response = await fetch(`${API_URL}/${id}`);
        let data;

        if (response.ok) {
          data = await response.json();
        } else {
          response = await fetch(API_URL);

          if (!response.ok) {
            throw new Error("Unable to load bike details.");
          }

          const bikes = await response.json();
          data = Array.isArray(bikes)
            ? bikes.find((item) => String(item.id) === String(id))
            : null;
        }

        if (!data || !data.id) {
          throw new Error("Bike not found.");
        }

        setBike(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchBike();
  }, [id]);

  const getValue = (value) =>
    value !== undefined && value !== null && value !== ""
      ? value
      : "Not provided";

  const formatPrice = (price) => {
    const amount = Number(price);

    return price !== undefined && price !== null && price !== "" &&
      Number.isFinite(amount)
      ? `₹${amount.toLocaleString("en-IN")}`
      : "Price unavailable";
  };

  const specifications = [
    { label: "Brand", value: getValue(bike?.brand), icon: <FaMotorcycle /> },
    { label: "Engine", value: getValue(bike?.engine), icon: <FaCogs /> },
    { label: "Fuel Type", value: getValue(bike?.fuel), icon: <FaGasPump /> },
    {
      label: "Transmission",
      value: getValue(bike?.transmission),
      icon: <FaCogs />,
    },
    { label: "Color", value: getValue(bike?.color), icon: <FaPalette /> },
    {
      label: "Top Speed",
      value: getValue(bike?.topSpeed),
      icon: <FaTachometerAlt />,
    },
    {
      label: "Fuel Tank",
      value: getValue(bike?.fuelTank),
      icon: <FaGasPump />,
    },
    {
      label: "Status",
      value: getValue(bike?.status || "Available"),
      icon: <FaCheckCircle />,
    },
  ];

  if (loading) {
    return (
      <div className="vehicle-state">
        <div className="vehicle-loader" />
        <p>Loading bike details...</p>
      </div>
    );
  }

  if (error || !bike) {
    return (
      <div className="vehicle-state">
        <h2>Bike Details Unavailable</h2>
        <p>{error || "We couldn't find this bike."}</p>
        <Link to="/bikes" className="vehicle-back">
          <FaArrowLeft /> Back to Bikes
        </Link>
      </div>
    );
  }

  return (
    <main className="vehicle-details-page">
      <div className="vehicle-details-container">
        <Link to="/bikes" className="vehicle-back">
          <FaArrowLeft /> Back to Bikes
        </Link>

        <section className="vehicle-hero">
          <div className="vehicle-image-wrap">
            <img
              className="vehicle-main-image"
              src={bike.image || bike.imageUrl || bike.img || ""}
              alt={bike.name || "Bike"}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            {!(bike.image || bike.imageUrl || bike.img) && (
              <div className="vehicle-image-placeholder">
                <FaMotorcycle />
                <span>Image unavailable</span>
              </div>
            )}
          </div>

          <div className="vehicle-hero-info">
            <span className="vehicle-eyebrow">BIKE DETAILS</span>
            <h1>{bike.name || "Unnamed Bike"}</h1>
            <p className="vehicle-brand">{bike.brand || "Brand not provided"}</p>

            <div className="vehicle-price">{formatPrice(bike.price)}</div>

            <div className="vehicle-status">
              <FaCheckCircle />
              {bike.status || "Available"}
            </div>

            <a href="tel:" className="vehicle-primary-button">
              <FaPhone /> Contact Showroom
            </a>
          </div>
        </section>

        <section className="vehicle-spec-section">
          <div className="vehicle-section-heading">
            <span>TECHNICAL OVERVIEW</span>
            <h2>Bike Specifications</h2>
            <p>Vehicle information available in the current listing.</p>
          </div>

          <div className="vehicle-spec-grid">
            {specifications.map((spec) => (
              <div className="vehicle-spec-card" key={spec.label}>
                <div className="vehicle-spec-icon">{spec.icon}</div>
                <div>
                  <p>{spec.label}</p>
                  <h3>{spec.value}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default BikeDetails;
