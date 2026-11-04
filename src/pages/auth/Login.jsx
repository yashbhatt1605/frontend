
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = (
  process.env.REACT_APP_API_URL || "http://localhost:5000"
).replace(/\/$/, "");

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.token || !data.user) {
        throw new Error(data.message || "Invalid email or password.");
      }

      // Save the session only after backend authentication succeeds.
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("role", data.user.role || "user");

      if (data.user.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/home", { replace: true });
      }
    } catch (err) {
      setError(
        err.message || "Could not connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl rounded-xl p-8 w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {error && (
          <p className="text-red-500 mb-4 text-center" role="alert">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-5">
          Don't have an account?
          <Link to="/register" className="text-blue-600 ml-2">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
