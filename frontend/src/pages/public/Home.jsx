import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
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
              Welcome to AXIS School — a modern learning environment
              where students discover their potential, develop confidence
              and prepare for a successful future.
            </p>

            <div className="hero-buttons">
              <Link
                to="/admissions"
                className="primary-btn"
              >
                Apply for Admission →
              </Link>

              <Link
                to="/about"
                className="secondary-btn"
              >
                Explore Our School
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <strong>25+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>5K+</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>150+</strong>
                <span>Expert Teachers</span>
              </div>
            </div>

          </div>

          <div className="hero-image">
            <div className="hero-card">

              <div className="school-icon">
                🏫
              </div>

              <h3>
                Welcome to AXIS School
              </h3>

              <p>
                Learn • Grow • Lead
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">

        <div className="section-heading">
          <span>WHY AXIS SCHOOL</span>

          <h2>
            Education Beyond
            <span> Classrooms</span>
          </h2>

          <p>
            We provide students with the knowledge, skills and
            experiences needed to succeed in a changing world.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🎓</div>

            <h3>
              Academic Excellence
            </h3>

            <p>
              Strong academic programs designed to help every
              student achieve their highest potential.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>

            <h3>
              Expert Faculty
            </h3>

            <p>
              Experienced and passionate teachers who inspire
              students to learn and grow.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔬</div>

            <h3>
              Modern Facilities
            </h3>

            <p>
              Smart classrooms, science labs, libraries and
              sports facilities for complete development.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌱</div>

            <h3>
              Holistic Development
            </h3>

            <p>
              We focus on academics, creativity, leadership,
              sports and character development.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">

        <div>
          <h2>
            Give Your Child the Best Start
          </h2>

          <p>
            Join the AXIS School community today.
          </p>
        </div>

        <Link to="/admissions">
          Start Admission →
        </Link>

      </section>
    </div>
  );
}

export default Home;