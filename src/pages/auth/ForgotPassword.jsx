import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/auth.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Connect Backend API
        console.log("Reset Password Email:", email);

        alert("Password reset link has been sent to your email.");
        setEmail("");
    };

    return (
        <div className="auth-page">
            <div className="auth-card">

                <div className="auth-logo">
                    <h1>CarXpress</h1>
                </div>

                <h2 className="auth-title">
                    Forgot Password
                </h2>

                <p className="forgot-text">
                    Enter your registered email address and we'll send you a password reset link.
                </p>

                <form className="auth-form" onSubmit={handleSubmit}>

                    <div className="auth-group">
                        <label>Email Address</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button className="auth-btn" type="submit">
                        Send Reset Link
                    </button>

                </form>

                <div className="auth-footer">
                    Remember your password?{" "}
                    <Link to="/login">
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;