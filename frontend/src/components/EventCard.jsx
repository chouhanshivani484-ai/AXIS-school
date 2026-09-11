import { Link } from "react-router-dom";

function EventCard({ event = {} }) {
  const date = event.date || "15";
  const month = event.month || "SEP";

  return (
    <article className="event-card">
      <div className="event-date" aria-label={`${date} ${month}`}>
        <strong>{date}</strong>
        <span>{month}</span>
      </div>

      <div className="event-content">
        <span className="event-category">
          {event.category || "School Event"}
        </span>

        <h3>{event.title || "School Event"}</h3>

        <p>
          {event.description ||
            "Join the AXIS School community for an engaging and memorable event."}
        </p>

        {event.link ? (
          <Link to={event.link} className="event-link">
            View Details →
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => event.onView?.(event)}
            aria-label={`View details for ${event.title || "event"}`}
          >
            View Details →
          </button>
        )}
      </div>
    </article>
  );
}

export default EventCard;