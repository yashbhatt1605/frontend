
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/auth.css";

const API_URL = (
  process.env.REACT_APP_API_URL || "http://localhost:5000"
).replace(/\/$/, "");

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const phone = formData.phone.trim();
    const password = formData.password;

    if (!name || !email || !phone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Registration failed.");
      }

      // Registration must be confirmed by the backend.
      alert("Registration successful! Please log in.");
      navigate("/login", { replace: true });
    } catch (err) {
      setError(
        err.message || "Could not connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <h1>CarXpress</h1>
        </div>

        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join CarXpress Today</p>

        {error && (
          <p className="text-red-600 mb-4 text-center" role="alert">
            {error}
          </p>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-group">
            <label htmlFor="register-name">Full Name</label>
            <input
              id="register-name"
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={handleChange}
              maxLength={80}
              autoComplete="name"
              required
            />
          </div>

          <div className="auth-group">
            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="auth-group">
            <label htmlFor="register-phone">Phone</label>
            <input
              id="register-phone"
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              required
            />
          </div>

          <div className="auth-group">
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              name="password"
              placeholder="At least 8 characters"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              autoComplete="new-password"
              required
            />
          </div>

          <div className="auth-group">
            <label htmlFor="register-confirm-password">
              Confirm Password
            </label>
            <input
              id="register-confirm-password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={8}
              autoComplete="new-password"
              required
            />
          </div>

          <button className="auth-btn" type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
