import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Classes", path: "/classes" },
    { name: "Faculty", path: "/faculty" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">A</span>
          <div className="logo-text">
            <strong>AXIS</strong>
            <small>School</small>
          </div>
        </Link>
        {/* DESKTOP NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
          {/* MOBILE AUTH */}
          <div className="mobile-auth">
            {isAuthenticated ? (
              <>
                <Link
                  to={
                    user?.role === "admin"
                      ? "/admin/dashboard"
                      : user?.role === "teacher"
                      ? "/teacher/dashboard"
                      : user?.role === "parent"
                      ? "/parent/dashboard"
                      : "/student/dashboard"
                  }
                  className="mobile-dashboard-btn"
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
                <button
                  className="mobile-logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="mobile-login-btn"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/admissions"
                  className="mobile-admission-btn"
                  onClick={closeMenu}
                >
                  Admissions
                </Link>
              </>
            )}
          </div>
        </nav>
        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">
          {isAuthenticated ? (
            <>
              <Link
                to={
                  user?.role === "admin"
                    ? "/admin/dashboard"
                    : user?.role === "teacher"
                    ? "/teacher/dashboard"
                    : user?.role === "parent"
                    ? "/parent/dashboard"
                    : "/student/dashboard"
                }
                className="dashboard-btn"
              >
                Dashboard
              </Link>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-btn">
                Login
              </Link>
              <Link to="/admissions" className="admission-btn">
                Admissions
              </Link>
            </>
          )}
        </div>
        {/* MOBILE MENU BUTTON */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
export default Navbar;