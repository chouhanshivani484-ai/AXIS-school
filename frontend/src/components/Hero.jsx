import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            ✨ Excellence in Education
          </span>

          <h1>
            Shaping Bright
            <span> Futures Together</span>
          </h1>

          <p>
            Welcome to AXIS School — a modern learning environment where
            students discover their potential, build confidence and prepare
            for a successful future.
          </p>

          <div className="hero-actions">

            <Link
              to="/admissions"
              className="hero-primary-btn"
            >
              Apply for Admission →
            </Link>

            <Link
              to="/about"
              className="hero-secondary-btn"
            >
              Explore Our School
            </Link>

          </div>

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>25+</strong>
              <span>Years Experience</span>
            </div>

            <div className="hero-stat">
              <strong>5K+</strong>
              <span>Students</span>
            </div>

            <div className="hero-stat">
              <strong>150+</strong>
              <span>Expert Teachers</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-main-card">

            <div className="hero-school-icon">
              🏫
            </div>

            <h3>Welcome to AXIS School</h3>

            <p>
              Learn • Grow • Lead
            </p>

            <div className="hero-mini-cards">

              <div>
                <span>🎓</span>
                <strong>Quality</strong>
                <small>Education</small>
              </div>

              <div>
                <span>🌟</span>
                <strong>Bright</strong>
                <small>Futures</small>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;