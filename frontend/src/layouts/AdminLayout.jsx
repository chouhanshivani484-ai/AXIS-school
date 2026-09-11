import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const adminMenu = [
  {
    path: "/admin/dashboard",
    icon: "📊",
    label: "Dashboard",
  },
  {
    path: "/admin/admissions",
    icon: "🎓",
    label: "Admissions",
  },
  {
    path: "/admin/students",
    icon: "👨‍🎓",
    label: "Students",
  },
  {
    path: "/admin/teachers",
    icon: "👨‍🏫",
    label: "Teachers",
  },
  {
    path: "/admin/attendance",
    icon: "📅",
    label: "Attendance",
  },
  {
    path: "/admin/fees",
    icon: "💳",
    label: "Fees",
  },
  {
    path: "/admin/results",
    icon: "📈",
    label: "Results",
  },
  {
    path: "/admin/notices",
    icon: "📢",
    label: "Notices",
  },
  {
    path: "/admin/events",
    icon: "🗓️",
    label: "Events",
  },
  {
    path: "/admin/messages",
    icon: "✉️",
    label: "Messages",
  },
];

function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">

        <div className="admin-brand">
          <div className="admin-brand-icon">
            AX
          </div>

          <div>
            <h2>AXIS School</h2>
            <span>ADMIN PANEL</span>
          </div>
        </div>

        <nav className="admin-nav">

          {adminMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `admin-nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <span className="admin-nav-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </NavLink>
          ))}

        </nav>

        <div className="admin-sidebar-bottom">

          <Link
            to="/"
            className="admin-back-link"
          >
            ← Back to Website
          </Link>

          <button
            type="button"
            className="admin-logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>
      </aside>

      {/* MAIN */}
      <div className="admin-main">

        {/* TOPBAR */}
        <header className="admin-topbar">

          <div>
            <h1>Administration</h1>

            <p>
              Manage AXIS School operations
            </p>
          </div>

          <div className="admin-user">

            <div className="admin-user-avatar">
              {user?.name
                ? user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()
                : "AD"}
            </div>

            <div className="admin-user-info">
              <strong>
                {user?.name || "Administrator"}
              </strong>

              <span>
                {user?.role || "admin"}
              </span>
            </div>

          </div>

        </header>

        {/* PAGE CONTENT */}
        <main className="admin-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default AdminLayout;