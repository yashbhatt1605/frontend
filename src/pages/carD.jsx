
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCar,
  FaGasPump,
  FaCogs,
  FaPalette,
  FaCalendarAlt,
  FaTachometerAlt,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import "./VehicleDetails.css";

const API_URL =
  "https://6a6199ceda10c59c1809a1eb.mockapi.io/cardetaild/cardetails";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCar = async () => {
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
            throw new Error("Unable to load car details.");
          }

          const cars = await response.json();
          data = Array.isArray(cars)
            ? cars.find((item) => String(item.id) === String(id))
            : null;
        }

        if (!data || !data.id) {
          throw new Error("Car not found.");
        }

        setCar(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
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
    { label: "Brand", value: getValue(car?.brand), icon: <FaCar /> },
    { label: "Year", value: getValue(car?.year), icon: <FaCalendarAlt /> },
    { label: "Fuel Type", value: getValue(car?.fuel), icon: <FaGasPump /> },
    {
      label: "Transmission",
      value: getValue(car?.transmission),
      icon: <FaCogs />,
    },
    { label: "Color", value: getValue(car?.color), icon: <FaPalette /> },
    {
      label: "Mileage",
      value: getValue(car?.mileage),
      icon: <FaTachometerAlt />,
    },
    { label: "Engine", value: getValue(car?.engine), icon: <FaCogs /> },
    { label: "Status", value: getValue(car?.status || "Available"), icon: <FaCheckCircle /> },
  ];

  if (loading) {
    return (
      <div className="vehicle-state">
        <div className="vehicle-loader" />
        <p>Loading car details...</p>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="vehicle-state">
        <h2>Car Details Unavailable</h2>
        <p>{error || "We couldn't find this car."}</p>
        <Link to="/cars" className="vehicle-back">
          <FaArrowLeft /> Back to Cars
        </Link>
      </div>
    );
  }

  return (
    <main className="vehicle-details-page">
      <div className="vehicle-details-container">
        <Link to="/cars" className="vehicle-back">
          <FaArrowLeft /> Back to Cars
        </Link>

        <section className="vehicle-hero">
          <div className="vehicle-image-wrap">
            <img
              className="vehicle-main-image"
              src={car.image || car.imageUrl || car.img || ""}
              alt={car.name || "Car"}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            {!(car.image || car.imageUrl || car.img) && (
              <div className="vehicle-image-placeholder">
                <FaCar />
                <span>Image unavailable</span>
              </div>
            )}
          </div>

          <div className="vehicle-hero-info">
            <span className="vehicle-eyebrow">CAR DETAILS</span>
            <h1>{car.name || "Unnamed Car"}</h1>
            <p className="vehicle-brand">{car.brand || "Brand not provided"}</p>

            <div className="vehicle-price">{formatPrice(car.price)}</div>

            <div className="vehicle-status">
              <FaCheckCircle />
              {car.status || "Available"}
            </div>

            <a href="tel:" className="vehicle-primary-button">
              <FaPhone /> Contact Showroom
            </a>
          </div>
        </section>

        <section className="vehicle-spec-section">
          <div className="vehicle-section-heading">
            <span>TECHNICAL OVERVIEW</span>
            <h2>Car Specifications</h2>
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

export default CarDetails;
