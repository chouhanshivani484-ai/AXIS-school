import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function StudentDashboard() {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const studentName = user?.name || "Student";
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const stats = [
    {
      icon: "✓",
      title: "Attendance",
      value: "92%",
      text: "Excellent attendance",
      path: "/student/attendance",
    },
    {
      icon: "📚",
      title: "Homework",
      value: "06",
      text: "Pending assignments",
      path: "/student/homework",
    },
    {
      icon: "🏆",
      title: "Average Result",
      value: "87%",
      text: "Current academic score",
      path: "/student/results",
    },
    {
      icon: "💳",
      title: "Fees",
      value: "₹12,500",
      text: "Outstanding amount",
      path: "/student/fees",
    },
  ];
  const timetable = [
    {
      time: "08:00 - 08:45",
      subject: "Mathematics",
      teacher: "Mr. Sharma",
      room: "Room 201",
    },
    {
      time: "08:45 - 09:30",
      subject: "Science",
      teacher: "Mrs. Gupta",
      room: "Lab 102",
    },
    {
      time: "09:45 - 10:30",
      subject: "English",
      teacher: "Ms. Singh",
      room: "Room 105",
    },
    {
      time: "10:30 - 11:15",
      subject: "Computer Science",
      teacher: "Mr. Verma",
      room: "Computer Lab",
    },
  ];
  const homework = [
    {
      subject: "Mathematics",
      title: "Algebra Practice",
      due: "Tomorrow",
      status: "Pending",
    },
    {
      subject: "Science",
      title: "Physics Assignment",
      due: "Sep 10",
      status: "Pending",
    },
    {
      subject: "English",
      title: "Essay Writing",
      due: "Sep 12",
      status: "Submitted",
    },
  ];
  return (
    <div className="student-layout">
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="student-overlay"
          onClick={closeSidebar}
        ></div>
      )}
      {/* SIDEBAR */}
      <aside className={`student-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="student-sidebar-logo">
          <span>A</span>
          <div>
            <strong>AXIS</strong>
            <small>Student Portal</small>
          </div>
        </div>
        <nav className="student-menu">
          <Link
            to="/student/dashboard"
            className="student-menu-item active"
            onClick={closeSidebar}
          >
            <span>⌂</span>
            Dashboard
          </Link>
          <Link
            to="/student/profile"
            className="student-menu-item"
            onClick={closeSidebar}
          >
            <span>👤</span>
            My Profile
          </Link>
          <Link
            to="/student/attendance"
            className="student-menu-item"
            onClick={closeSidebar}
          >
            <span>✓</span>
            Attendance
          </Link>
          <Link
            to="/student/timetable"
            className="student-menu-item"
            onClick={closeSidebar}
          >
            <span>📅</span>
            Timetable
          </Link>
          <Link
            to="/student/homework"
            className="student-menu-item"
            onClick={closeSidebar}
          >
            <span>📝</span>
            Homework
          </Link>
          <Link
            to="/student/results"
            className="student-menu-item"
            onClick={closeSidebar}
          >
            <span>🏆</span>
            Results
          </Link>
          <Link
            to="/student/fees"
            className="student-menu-item"
            onClick={closeSidebar}
          >
            <span>💳</span>
            Fees
          </Link>
        </nav>
        <div className="student-sidebar-bottom">
          <Link to="/" className="back-school">
            ← Back to School Website
          </Link>
        </div>
      </aside>
      {/* MAIN */}
      <main className="student-main">
        {/* TOP BAR */}
        <header className="student-topbar">
          <button
            className="student-mobile-menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <div>
            <h1>Student Dashboard</h1>
            <p>Welcome back, {studentName} 👋</p>
          </div>
          <div className="student-top-actions">
            <button className="notification-btn">
              🔔
              <span>3</span>
            </button>
            <div className="student-user">
              <div className="student-avatar">
                {studentName.charAt(0).toUpperCase()}
              </div>
              <div>
                <strong>{studentName}</strong>
                <small>Student</small>
              </div>
            </div>
          </div>
        </header>
        {/* WELCOME CARD */}
        <section className="student-welcome">
          <div>
            <span className="welcome-label">
              STUDENT PORTAL
            </span>
            <h2>
              Good morning, {studentName}! 👋
            </h2>
            <p>
              Stay updated with your classes, attendance,
              homework and academic progress.
            </p>
            <Link to="/student/profile">
              View My Profile →
            </Link>
          </div>
          <div className="welcome-illustration">
            🎓
          </div>
        </section>
        {/* STAT CARDS */}
        <section className="student-stats">
          {stats.map((stat) => (
            <Link
              to={stat.path}
              className="student-stat-card"
              key={stat.title}
            >
              <div className="student-stat-icon">
                {stat.icon}
              </div>
              <div>
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
                <small>{stat.text}</small>
              </div>
            </Link>
          ))}
        </section>
        {/* CONTENT GRID */}
        <section className="student-content-grid">
          {/* TIMETABLE */}
          <div className="student-panel">
            <div className="student-panel-header">
              <div>
                <h2>Today's Timetable</h2>
                <p>Your classes for today</p>
              </div>
              <Link to="/student/timetable">
                View All
              </Link>
            </div>
            <div className="timetable-list">
              {timetable.map((item, index) => (
                <div
                  className="timetable-item"
                  key={index}
                >
                  <div className="time-box">
                    {item.time}
                  </div>
                  <div className="class-info">
                    <strong>{item.subject}</strong>
                    <span>
                      {item.teacher} · {item.room}
                    </span>
                  </div>
                  <span className="class-status">
                    {index === 0 ? "Now" : "Upcoming"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* ATTENDANCE */}
          <div className="student-panel attendance-panel">
            <div className="student-panel-header">
              <div>
                <h2>Attendance</h2>
                <p>Current academic year</p>
              </div>
              <Link to="/student/attendance">
                Details
              </Link>
            </div>
            <div className="attendance-circle">
              <div>
                <strong>92%</strong>
                <span>Attendance</span>
              </div>
            </div>
            <div className="attendance-info">
              <div>
                <strong>168</strong>
                <span>Present</span>
              </div>
              <div>
                <strong>14</strong>
                <span>Absent</span>
              </div>
              <div>
                <strong>182</strong>
                <span>Total Days</span>
              </div>
            </div>
          </div>
        </section>
        {/* BOTTOM GRID */}
        <section className="student-content-grid">
          {/* HOMEWORK */}
          <div className="student-panel">
            <div className="student-panel-header">
              <div>
                <h2>Recent Homework</h2>
                <p>Your latest assignments</p>
              </div>
              <Link to="/student/homework">
                View All
              </Link>
            </div>
            <div className="homework-list">
              {homework.map((item, index) => (
                <div
                  className="homework-item"
                  key={index}
                >
                  <div className="homework-icon">
                    📝
                  </div>
                  <div className="homework-info">
                    <strong>{item.title}</strong>
                    <span>{item.subject}</span>
                  </div>
                  <div className="homework-right">
                    <small>Due {item.due}</small>
                    <span
                      className={
                        item.status === "Submitted"
                          ? "status submitted"
                          : "status pending"
                      }
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* QUICK ACTIONS */}
          <div className="student-panel">
            <div className="student-panel-header">
              <div>
                <h2>Quick Actions</h2>
                <p>Access important sections</p>
              </div>
            </div>
            <div className="quick-actions">
              <Link to="/student/results">
                <span>🏆</span>
                <div>
                  <strong>View Results</strong>
                  <small>Check academic performance</small>
                </div>
                →
              </Link>
              <Link to="/student/fees">
                <span>💳</span>
                <div>
                  <strong>Fee Details</strong>
                  <small>View payment information</small>
                </div>
                →
              </Link>
              <Link to="/student/profile">
                <span>👤</span>
                <div>
                  <strong>My Profile</strong>
                  <small>Manage your profile</small>
                </div>
                →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default StudentDashboard;