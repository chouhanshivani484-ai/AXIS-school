import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const studentMenu = [
  {
    path: "/student/dashboard",
    icon: "🏠",
    label: "Dashboard",
  },
  {
    path: "/student/attendance",
    icon: "📅",
    label: "Attendance",
  },
  {
    path: "/student/results",
    icon: "📊",
    label: "Results",
  },
  {
    path: "/student/fees",
    icon: "💳",
    label: "Fees",
  },
  {
    path: "/student/homework",
    icon: "📝",
    label: "Homework",
  },
  {
    path: "/student/timetable",
    icon: "🗓️",
    label: "Timetable",
  },
  {
    path: "/student/profile",
    icon: "👤",
    label: "My Profile",
  },
];

function StudentLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const name = user?.name || "Student";

  const initials =
    name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase() || "ST";

  return (
    <div className="student-layout">

      {/* SIDEBAR */}
      <aside className="student-sidebar">

        <div className="student-logo">
          <div className="student-logo-icon">AX</div>

          <div>
            <strong>AXIS School</strong>
            <span>STUDENT PORTAL</span>
          </div>
        </div>

        <nav className="student-nav">
          {studentMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/student/dashboard"}
              className={({ isActive }) =>
                `student-nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="student-nav-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="student-sidebar-bottom">

          <Link
            to="/"
            className="student-back-link"
          >
            ← Back to Website
          </Link>

          <button
            type="button"
            className="student-logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="student-main">

        {/* TOP BAR */}
        <header className="student-topbar">

          <div>
            <h1>Student Portal</h1>

            <p>
              Manage your school activities from one place.
            </p>
          </div>

          <div className="student-user">

            <button
              type="button"
              className="student-notification"
              aria-label="Notifications"
            >
              🔔
              <span>3</span>
            </button>

            <div className="student-avatar">
              {initials}
            </div>

            <div className="student-user-info">
              <strong>{name}</strong>

              <span>
                {user?.role || "student"}
              </span>
            </div>

          </div>
        </header>

        {/* PAGE */}
        <main className="student-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default StudentLayout;