import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = await loginUser(formData);

      if (!data.success) {
        throw new Error(data.message);
      }

      login(data.user, data.token);

      if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (data.user.role === "teacher") {
        navigate("/teacher/dashboard");
      } else if (data.user.role === "parent") {
        navigate("/parent/dashboard");
      } else {
        navigate("/student/dashboard");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
        error.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <h1>AXIS School</h1>
          <p>Welcome back 👋</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="auth-button"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <a href="/register">Create Account</a>
        </p>

      </div>
    </div>
  );
}

export default Login;