function TeacherCard({ teacher = {} }) {
  const name = teacher.name || "AXIS Faculty Member";

  const initials =
    teacher.initials ||
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <article className="teacher-card">
      <div className="teacher-photo">
        {teacher.image ? (
          <img
            src={teacher.image}
            alt={name}
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      <div className="teacher-info">
        <h3>{name}</h3>

        <span className="teacher-subject">
          {teacher.subject || "Academic Faculty"}
        </span>

        <p>
          {teacher.qualification ||
            "Qualified & Experienced Educator"}
        </p>

        {teacher.experience && (
          <small>
            {teacher.experience} experience
          </small>
        )}
      </div>
    </article>
  );
}

export default TeacherCard;