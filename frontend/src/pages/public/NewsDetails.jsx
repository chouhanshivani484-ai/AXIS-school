import { Link, useParams } from "react-router-dom";

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

function NewsDetails() {
  const { slug } = useParams();

  const item = news.find(
    (newsItem) => newsItem.slug === slug
  );

  if (!item) {
    return (
      <div className="news-details-page">

        <section className="news-not-found">

          <div className="news-not-found-icon">
            📰
          </div>

          <h1>
            News Not Found
          </h1>

          <p>
            Sorry, the news article you are looking for does not exist.
          </p>

          <Link
            to="/news"
            className="news-back-btn"
          >
            ← Back to News
          </Link>

        </section>

      </div>
    );
  }

  return (
    <div className="news-details-page">

      {/* HERO */}

      <section className="news-details-hero">

        <div className="news-details-container">

          <Link
            to="/news"
            className="news-details-back"
          >
            ← Back to News
          </Link>

          <span className="news-details-category">
            {item.category}
          </span>

          <h1>
            {item.title}
          </h1>

          <div className="news-details-meta">

            <span>
              📅 {item.date}
            </span>

            <span>
              🏫 AXIS School
            </span>

          </div>

        </div>

      </section>

      {/* ARTICLE */}

      <section className="content-section">

        <div className="news-details-container">

          <article className="news-details-card">

            <div className="news-article-header">

              <span className="news-article-label">
                AXIS SCHOOL NEWS
              </span>

              <h2>
                {item.title}
              </h2>

              <div className="news-article-date">
                Published on {item.date}
              </div>

            </div>

            <div className="news-article-body">

              <p>
                {item.excerpt}
              </p>

              <p>
                {item.details}
              </p>

              <p>
                At AXIS School, we believe that every achievement,
                activity and learning experience contributes to the
                overall growth of our students. We continue to
                encourage learners to explore their interests,
                develop confidence and make a positive contribution
                to the school community.
              </p>

            </div>

            <div className="news-article-actions">

              <Link
                to="/news"
                className="news-back-btn"
              >
                ← Back to News
              </Link>

              <Link
                to="/contact"
                className="news-contact-btn"
              >
                Contact School →
              </Link>

            </div>

          </article>

        </div>

      </section>

    </div>
  );
}

export default NewsDetails;