import { Link } from "react-router-dom";

const events = [
  {
    slug: "independence-day-celebration",
    date: "15",
    month: "AUG",
    title: "Independence Day Celebration",
    category: "Cultural",
    description:
      "Students participate in cultural programs, performances and flag hoisting.",
  },
  {
    slug: "teachers-day",
    date: "05",
    month: "SEP",
    title: "Teachers' Day",
    category: "School Event",
    description:
      "A special celebration recognizing the contribution of our teachers.",
  },
  {
    slug: "annual-sports-meet",
    date: "20",
    month: "OCT",
    title: "Annual Sports Meet",
    category: "Sports",
    description:
      "Students compete in athletics, team sports and various competitions.",
  },
  {
    slug: "science-exhibition",
    date: "10",
    month: "NOV",
    title: "Science Exhibition",
    category: "Academic",
    description:
      "Students showcase innovative science projects and experiments.",
  },
  {
    slug: "annual-function",
    date: "22",
    month: "DEC",
    title: "Annual Function",
    category: "Cultural",
    description:
      "An evening of music, dance, drama and student performances.",
  },
  {
    slug: "republic-day",
    date: "15",
    month: "JAN",
    title: "Republic Day",
    category: "National Event",
    description:
      "Students celebrate Republic Day through cultural and educational activities.",
  },
];

function Events() {
  return (
    <div className="events-page">


      <section className="page-hero">
        <div className="page-hero-container">

          <span>SCHOOL EVENTS</span>

          <h1>
            Discover What's Happening
          </h1>

          <p>
            Stay updated with celebrations, competitions,
            academic activities and special events.
          </p>

        </div>
      </section>

      <section className="content-section">

        <div className="section-heading">

          <span>EVENT CALENDAR</span>

          <h2>
            Upcoming Events
          </h2>

          <p>
            Explore activities that make school life engaging
            and memorable.
          </p>

        </div>

        <div className="events-grid">

          {events.map((event) => (

            <article
              className="event-card"
              key={event.slug}
            >
              
              <div className="event-date">

                <strong>
                  {event.date}
                </strong>

                <span>
                  {event.month}
                </span>

              </div>

              {/* CONTENT */}

              <div className="event-content">

                <span className="event-category">
                  {event.category}
                </span>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

                {/* DETAIL PAGE */}

                <Link
                  to={`/events/${event.slug}`}
                  className="event-link"
                >
                  View Details →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Events;