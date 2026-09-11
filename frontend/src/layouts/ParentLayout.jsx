import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const parentMenu = [
  {
    path: "/parent/dashboard",
    icon: "🏠",
    label: "Dashboard",
  },
  {
    path: "/parent/attendance",
    icon: "📅",
    label: "Attendance",
  },
  {
    path: "/parent/results",
    icon: "📊",
    label: "Results",
  },
  {
    path: "/parent/fees",
    icon: "💳",
    label: "Fees",
  },
  {
    path: "/parent/homework",
    icon: "📝",
    label: "Homework",
  },
  {
    path: "/parent/timetable",
    icon: "🗓️",
    label: "Timetable",
  },
  {
    path: "/parent/notices",
    icon: "📢",
    label: "Notices",
  },
  {
    path: "/parent/profile",
    icon: "👤",
    label: "Profile",
  },
];

function ParentLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const name = user?.name || "Parent";

  const initials =
    name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase() || "PA";

  return (
    <div className="parent-layout">

      {/* SIDEBAR */}
      <aside className="parent-sidebar">

        <div className="parent-logo">
          <div className="parent-logo-icon">
            AX
          </div>

          <div>
            <strong>AXIS School</strong>
            <span>PARENT PORTAL</span>
          </div>
        </div>

        <nav className="parent-nav">

          {parentMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/parent/dashboard"}
              className={({ isActive }) =>
                `parent-nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="parent-nav-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </NavLink>
          ))}

        </nav>

        <div className="parent-sidebar-bottom">

          <Link
            to="/"
            className="parent-back-link"
          >
            ← Back to Website
          </Link>

          <button
            type="button"
            className="parent-logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>
      </aside>

      {/* MAIN */}
      <div className="parent-main">

        {/* TOPBAR */}
        <header className="parent-topbar">

          <div>
            <h1>Parent Portal</h1>

            <p>
              Monitor your child's academic journey.
            </p>
          </div>

          <div className="parent-user">

            <button
              type="button"
              className="parent-notification"
              aria-label="Notifications"
            >
              🔔
              <span>3</span>
            </button>

            <div className="parent-avatar">
              {initials}
            </div>

            <div className="parent-user-info">
              <strong>{name}</strong>

              <span>
                {user?.role || "parent"}
              </span>
            </div>

          </div>
        </header>

        {/* CONTENT */}
        <main className="parent-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default ParentLayout;