import { Routes, Route } from "react-router-dom";

/* =========================================================
   PUBLIC PAGES
========================================================= */

import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Academics from "./pages/public/Academics";
import Classes from "./pages/public/Classes";
import Faculty from "./pages/public/Faculty";
import Facilities from "./pages/public/Facilities";
import Gallery from "./pages/public/Gallery";
import Events from "./pages/public/Events";
import EventDetails from "./pages/public/EventDetails";
import News from "./pages/public/News";
import NewsDetails from "./pages/public/NewsDetails";
import Admissions from "./pages/public/Admissions";
import Contact from "./pages/public/Contact";
import FAQ from "./pages/public/FAQ";

/* =========================================================
   AUTH PAGES
========================================================= */

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/* =========================================================
   STUDENT
========================================================= */

import StudentDashboard from "./pages/student/StudentDashboard";

/* =========================================================
   COMMON
========================================================= */

import ProtectedRoute from "./components/ProtectedRoute";

/* =========================================================
   LAYOUTS
========================================================= */

import PublicLayout from "./layouts/PublicLayout";
import StudentLayout from "./layouts/StudentLayout";
import ParentLayout from "./layouts/ParentLayout";
import AdminLayout from "./layouts/AdminLayout";

/* =========================================================
   SCHOOL CONTEXT
========================================================= */

import { SchoolProvider } from "./context/SchoolContext";

/* =========================================================
   PARENT DASHBOARD
========================================================= */

function ParentDashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="dashboard-icon">
            👨‍👩‍👧
          </div>

          <h1>Parent Dashboard</h1>

          <p>
            Welcome to the AXIS School parent portal.
          </p>

          <p>
            Your child's attendance, results, fees and
            school activities will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TEACHER DASHBOARD
========================================================= */

function TeacherDashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="dashboard-icon">
            👨‍🏫
          </div>

          <h1>Teacher Dashboard</h1>

          <p>
            Welcome to the AXIS School teacher portal.
          </p>

          <p>
            Classes, attendance, homework, results and
            students will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ADMIN DASHBOARD
========================================================= */

function AdminDashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="dashboard-icon">
            ⚙️
          </div>

          <h1>Admin Dashboard</h1>

          <p>
            Welcome to the AXIS School administration panel.
          </p>

          <p>
            Students, teachers, attendance, fees, notices,
            admissions and reports will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   404 PAGE
========================================================= */

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-card">

        <div className="not-found-number">
          404
        </div>

        <h1>
          Page Not Found
        </h1>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="not-found-btn"
        >
          ← Back to Home
        </a>

      </div>
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <SchoolProvider>
      <Routes>

        {/* =================================================
            PUBLIC WEBSITE
            One Navbar + One Footer through PublicLayout
        ================================================= */}

        <Route element={<PublicLayout />}>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT */}

          <Route
            path="/about"
            element={<About />}
          />

          {/* ACADEMICS */}

          <Route
            path="/academics"
            element={<Academics />}
          />

          {/* CLASSES */}

          <Route
            path="/classes"
            element={<Classes />}
          />

          {/* FACULTY */}

          <Route
            path="/faculty"
            element={<Faculty />}
          />

          {/* FACILITIES */}

          <Route
            path="/facilities"
            element={<Facilities />}
          />

          {/* GALLERY */}

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          {/* EVENTS */}

          <Route
            path="/events"
            element={<Events />}
          />

          {/* EVENT DETAILS */}

          <Route
            path="/events/:slug"
            element={<EventDetails />}
          />

          {/* NEWS */}

          <Route
            path="/news"
            element={<News />}
          />

          {/* NEWS DETAILS */}

          <Route
            path="/news/:slug"
            element={<NewsDetails />}
          />

          {/* ADMISSIONS */}

          <Route
            path="/admissions"
            element={<Admissions />}
          />

          {/* CONTACT */}

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* FAQ */}

          <Route
            path="/faq"
            element={<FAQ />}
          />

        </Route>

        {/* =================================================
            AUTH
        ================================================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* =================================================
            STUDENT PORTAL
        ================================================= */}

        <Route
          element={
            <ProtectedRoute role="student">
              <StudentLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/student/dashboard"
            element={<StudentDashboard />}
          />

          <Route
            path="/student/attendance"
            element={
              <div className="dashboard-page">
                <h1>My Attendance</h1>

                <p>
                  Your attendance information will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/student/results"
            element={
              <div className="dashboard-page">
                <h1>My Results</h1>

                <p>
                  Your examination results will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/student/fees"
            element={
              <div className="dashboard-page">
                <h1>My Fees</h1>

                <p>
                  Your fee information will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/student/homework"
            element={
              <div className="dashboard-page">
                <h1>Homework</h1>

                <p>
                  Your homework will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/student/timetable"
            element={
              <div className="dashboard-page">
                <h1>Timetable</h1>

                <p>
                  Your class timetable will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/student/profile"
            element={
              <div className="dashboard-page">
                <h1>My Profile</h1>

                <p>
                  Your profile information will appear here.
                </p>
              </div>
            }
          />

        </Route>

        {/* =================================================
            PARENT PORTAL
        ================================================= */}

        <Route
          element={
            <ProtectedRoute role="parent">
              <ParentLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/parent/dashboard"
            element={<ParentDashboard />}
          />

          <Route
            path="/parent/attendance"
            element={
              <div className="dashboard-page">
                <h1>Child Attendance</h1>

                <p>
                  Your child's attendance will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/parent/results"
            element={
              <div className="dashboard-page">
                <h1>Child Results</h1>

                <p>
                  Your child's examination results will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/parent/fees"
            element={
              <div className="dashboard-page">
                <h1>School Fees</h1>

                <p>
                  Your child's fee information will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/parent/homework"
            element={
              <div className="dashboard-page">
                <h1>Homework</h1>

                <p>
                  Homework information will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/parent/timetable"
            element={
              <div className="dashboard-page">
                <h1>Timetable</h1>

                <p>
                  Your child's timetable will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/parent/notices"
            element={
              <div className="dashboard-page">
                <h1>School Notices</h1>

                <p>
                  School notices will appear here.
                </p>
              </div>
            }
          />

          <Route
            path="/parent/profile"
            element={
              <div className="dashboard-page">
                <h1>Parent Profile</h1>

                <p>
                  Parent profile information will appear here.
                </p>
              </div>
            }
          />

        </Route>

        {/* =================================================
            TEACHER PORTAL
        ================================================= */}

        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute role="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        {/* =================================================
            ADMIN PORTAL
        ================================================= */}

        <Route
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/admissions"
            element={
              <div className="dashboard-page">
                <h1>Admissions</h1>
                <p>
                  Manage student admission applications.
                </p>
              </div>
            }
          />

          <Route
            path="/admin/students"
            element={
              <div className="dashboard-page">
                <h1>Students</h1>
                <p>
                  Manage AXIS School students.
                </p>
              </div>
            }
          />

          <Route
            path="/admin/teachers"
            element={
              <div className="dashboard-page">
                <h1>Teachers</h1>
                <p>
                  Manage school teachers.
                </p>
              </div>
            }
          />

          <Route
            path="/admin/attendance"
            element={
              <div className="dashboard-page">
                <h1>Attendance</h1>
                <p>
                  Manage student attendance.
                </p>
              </div>
            }
          />

          <Route
            path="/admin/fees"
            element={
              <div className="dashboard-page">
                <h1>Fees</h1>
                <p>
                  Manage student fees.
                </p>
              </div>
            }
          />

          <Route
            path="/admin/results"
            element={
              <div className="dashboard-page">
                <h1>Results</h1>
                <p>
                  Manage examination results.
                </p>
              </div>
            }
          />

          <Route
            path="/admin/notices"
            element={
              <div className="dashboard-page">
                <h1>Notices</h1>
                <p>
                  Create and manage school notices.
                </p>
              </div>
            }
          />

          <Route
            path="/admin/events"
            element={
              <div className="dashboard-page">
                <h1>Events</h1>
                <p>
                  Manage school events.
                </p>
              </div>
            }
          />

          <Route
            path="/admin/messages"
            element={
              <div className="dashboard-page">
                <h1>Messages</h1>
                <p>
                  Manage contact messages.
                </p>
              </div>
            }
          />

        </Route>

        {/* =================================================
            404
        ================================================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </SchoolProvider>
  );
}

export default App;