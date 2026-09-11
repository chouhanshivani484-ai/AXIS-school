import { Link } from "react-router-dom";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* SCHOOL INFO */}
        <div className="footer-column footer-about">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">A</span>
            <div>
              <strong>AXIS</strong>
              <small>School</small>
            </div>
          </Link>
          <p>
            Empowering young minds with knowledge, creativity,
            confidence and strong values for a brighter future.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>
        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/faculty">Faculty</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        {/* STUDENT */}
        <div className="footer-column">
          <h3>Student Portal</h3>
          <Link to="/login">Student Login</Link>
          <Link to="/register">Create Account</Link>
          <Link to="/student/dashboard">Dashboard</Link>
          <Link to="/events">School Events</Link>
          <Link to="/news">Latest News</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        {/* CONTACT */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="footer-contact">
            <span>📍</span>
            <p>AXIS School Campus,<br />New Delhi, India</p>
          </div>
          <div className="footer-contact">
            <span>📞</span>
            <p>+91 98765 43210</p>
          </div>
          <div className="footer-contact">
            <span>✉</span>
            <p>info@axisschool.com</p>
          </div>
        </div>
      </div>
      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {currentYear} AXIS School. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;