import { Link } from "react-router-dom";

const news = [
  {
    slug: "axis-students-achieve-excellence",
    date: "08 Sep 2026",
    category: "Achievement",
    title: "AXIS Students Achieve Excellence",
    excerpt:
      "Our students have achieved outstanding results in academics, sports and co-curricular activities.",
    details:
      "AXIS School is proud to celebrate the outstanding achievements of our students. Their dedication, discipline and hard work have helped them perform exceptionally well in academics, sports and a range of co-curricular activities.",
  },
  {
    slug: "new-digital-learning-zone",
    date: "02 Sep 2026",
    category: "Campus",
    title: "New Digital Learning Zone Opened",
    excerpt:
      "The new learning zone provides students with modern digital resources and collaborative study spaces.",
    details:
      "AXIS School has introduced a new Digital Learning Zone designed to support technology-enabled learning. Students can use the space for research, group projects, presentations and creative digital activities.",
  },
  {
    slug: "admissions-open-new-session",
    date: "28 Aug 2026",
    category: "Announcement",
    title: "Admissions Open for New Academic Session",
    excerpt:
      "Applications are now open for selected classes for the upcoming academic session.",
    details:
      "Parents and guardians can now apply for admission to AXIS School for the upcoming academic session. The online admission process has been designed to make applications simple and convenient.",
  },
  {
    slug: "axis-science-team-wins-competition",
    date: "20 Aug 2026",
    category: "Science",
    title: "AXIS Science Team Wins Competition",
    excerpt:
      "Our students secured top positions in an inter-school science and innovation competition.",
    details:
      "The AXIS School science team received top recognition at an inter-school science and innovation competition. Students presented creative models and practical solutions to real-world challenges.",
  },
  {
    slug: "sports-team-qualifies-finals",
    date: "12 Aug 2026",
    category: "Sports",
    title: "School Sports Team Qualifies for Finals",
    excerpt:
      "Our students have qualified for the final round of the regional school sports tournament.",
    details:
      "The AXIS School sports team has successfully qualified for the finals after a series of strong performances. The achievement reflects the students' teamwork, discipline and commitment to sports.",
  },
  {
    slug: "student-leadership-program",
    date: "05 Aug 2026",
    category: "Student Life",
    title: "Student Leadership Program Begins",
    excerpt:
      "A new student leadership initiative has started to develop confidence and leadership skills.",
    details:
      "The Student Leadership Program gives learners opportunities to take responsibility, work with teams, organize activities and develop communication and leadership skills.",
  },
];

function News() {
  return (
    <div className="news-page">

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-container">

          <span>SCHOOL NEWS</span>

          <h1>
            Latest News & Updates
          </h1>

          <p>
            Stay informed about achievements, announcements,
            campus activities and important updates from AXIS School.
          </p>

        </div>
      </section>

      {/* NEWS */}
      <section className="content-section">

        <div className="section-heading">

          <span>FROM AXIS SCHOOL</span>

          <h2>
            Latest Updates
          </h2>

          <p>
            Explore the latest happenings and stories from
            our school community.
          </p>

        </div>

        <div className="news-grid">

          {news.map((item) => (

            <article
              className="news-card"
              key={item.slug}
            >

              <div className="news-card-top">

                <span className="news-category">
                  {item.category}
                </span>

                <span className="news-date">
                  {item.date}
                </span>

              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.excerpt}
              </p>

              <Link
                to={`/news/${item.slug}`}
                className="news-read-more"
              >
                Read More →
              </Link>

            </article>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="news-cta">

        <div className="container">

          <div className="news-cta-box">

            <div>

              <span>
                STAY CONNECTED
              </span>

              <h2>
                Never Miss a School Update
              </h2>

              <p>
                Keep checking AXIS School news for achievements,
                announcements and upcoming activities.
              </p>

            </div>

            <Link
              to="/contact"
              className="news-cta-btn"
            >
              Contact School →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default News;