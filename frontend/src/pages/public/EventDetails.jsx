import { Link, useParams } from "react-router-dom";

const events = [
  {
    slug: "independence-day-celebration",
    date: "15",
    month: "AUG",
    title: "Independence Day Celebration",
    category: "Cultural",
    description:
      "Students participate in cultural programs, performances and flag hoisting.",
    details:
      "Independence Day is celebrated at AXIS School with great enthusiasm and patriotic spirit. Students take part in flag hoisting, cultural performances, speeches and educational activities.",
  },
  {
    slug: "teachers-day",
    date: "05",
    month: "SEP",
    title: "Teachers' Day",
    category: "School Event",
    description:
      "A special celebration recognizing the contribution of our teachers.",
    details:
      "Teachers' Day is a special occasion at AXIS School to appreciate the dedication and contribution of our teachers.",
  },
  {
    slug: "annual-sports-meet",
    date: "20",
    month: "OCT",
    title: "Annual Sports Meet",
    category: "Sports",
    description:
      "Students compete in athletics, team sports and various competitions.",
    details:
      "The Annual Sports Meet encourages teamwork, discipline and sportsmanship.",
  },
  {
    slug: "science-exhibition",
    date: "10",
    month: "NOV",
    title: "Science Exhibition",
    category: "Academic",
    description:
      "Students showcase innovative science projects and experiments.",
    details:
      "Students present innovative science models and experiments during the Science Exhibition.",
  },
  {
    slug: "annual-function",
    date: "22",
    month: "DEC",
    title: "Annual Function",
    category: "Cultural",
    description:
      "An evening of music, dance, drama and student performances.",
    details:
      "The Annual Function celebrates student creativity through music, dance and drama.",
  },
  {
    slug: "republic-day",
    date: "15",
    month: "JAN",
    title: "Republic Day",
    category: "National Event",
    description:
      "Students celebrate Republic Day through cultural and educational activities.",
    details:
      "Republic Day is observed through patriotic presentations, speeches and cultural activities.",
  },
];

function EventDetails() {
  const { slug } = useParams();

  const event = events.find(
    (item) => item.slug === slug
  );

  if (!event) {
    return (
      <div className="event-not-found">
        <h1>Event Not Found</h1>

        <p>
          The event you are looking for does not exist.
        </p>

        <Link to="/events">
          ← Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="event-details-page">

      <section className="event-details-hero">
        <div className="event-details-container">

          <Link
            to="/events"
            className="event-details-back"
          >
            ← Back to Events
          </Link>

          <span className="event-details-category">
            {event.category}
          </span>

          <h1>{event.title}</h1>

          <div className="event-details-meta">
            <span>
              📅 {event.date} {event.month}
            </span>

            <span>
              🏫 AXIS School
            </span>
          </div>

        </div>
      </section>

      <section className="content-section">
        <div className="event-details-container">

          <div className="event-details-card">

            <div className="event-big-date">
              <strong>{event.date}</strong>
              <span>{event.month}</span>
            </div>

            <div className="event-details-content">

              <span className="event-details-small-title">
                SCHOOL EVENT
              </span>

              <h2>
                About This Event
              </h2>

              <p>
                {event.description}
              </p>

              <p>
                {event.details}
              </p>

              <div className="event-info-box">

                <div>
                  <span>Event</span>
                  <strong>{event.title}</strong>
                </div>

                <div>
                  <span>Category</span>
                  <strong>{event.category}</strong>
                </div>

                <div>
                  <span>Date</span>
                  <strong>
                    {event.date} {event.month}
                  </strong>
                </div>

              </div>

              <Link
                to="/contact"
                className="event-contact-btn"
              >
                Contact School →
              </Link>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default EventDetails;