import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/authService";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await loginUser({
        email: form.email,
        password: form.password,
      });

      console.log("LOGIN RESPONSE:", response);

      if (response.success) {
        // Save login information
        localStorage.setItem("isLoggedIn", "true");

        if (response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }

        alert("Login successful! 🎉");

        // Role based navigation
        const role = response.user?.role;

        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "parent") {
          navigate("/parent/dashboard");
        } else if (role === "teacher") {
          navigate("/teacher/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      alert(error.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left Section */}
        <div className="login-info">
          <div className="school-logo">
            <span>AXIS</span>
            <small>SCHOOL</small>
          </div>

          <h1>Welcome Back! 👋</h1>

          <p>
            Login to your AXIS School account and manage your
            school activities, academics and information.
          </p>

          <div className="login-features">
            <div>
              <span>✓</span>
              <p>Secure Login</p>
            </div>

            <div>
              <span>✓</span>
              <p>Easy Access</p>
            </div>

            <div>
              <span>✓</span>
              <p>Manage Your Account</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="login-card">

          <div className="login-card-header">
            <h2>Sign In</h2>

            <p>
              Enter your details to continue
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <div className="password-label">
                <label htmlFor="password">
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="remember-row">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Register */}
          <div className="register-link">
            <span>Don't have an account?</span>

            <Link to="/register">
              Create Account
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;