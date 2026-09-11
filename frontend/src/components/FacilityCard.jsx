function FacilityCard({ facility = {} }) {
  return (
    <article className="facility-card">
      <div className="facility-icon" aria-hidden="true">
        {facility.icon || "🏫"}
      </div>

      <h3>{facility.title || "Modern Facility"}</h3>

      <p>
        {facility.description ||
          "A safe, modern and student-friendly space designed for better learning."}
      </p>
    </article>
  );
}

export default FacilityCard;