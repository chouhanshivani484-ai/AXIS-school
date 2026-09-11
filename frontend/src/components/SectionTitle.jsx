function SectionTitle({
  eyebrow = "AXIS SCHOOL",
  title = "Education Beyond Classrooms",
  highlight = "",
  description = "",
  centered = true,
}) {
  return (
    <div
      className={`section-title ${centered ? "section-title-center" : ""}`}
    >
      <span className="section-eyebrow">
        {eyebrow}
      </span>

      <h2>
        {title}{" "}
        {highlight && (
          <span className="section-highlight">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;