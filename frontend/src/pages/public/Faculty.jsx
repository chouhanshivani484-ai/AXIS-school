const teachers = [
  {
    name: "Dr. Ananya Sharma",
    subject: "Mathematics",
    qualification: "M.Sc., B.Ed.",
    experience: "12+ Years",
  },
  {
    name: "Mr. Rahul Verma",
    subject: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "10+ Years",
  },
  {
    name: "Ms. Priya Mehta",
    subject: "English",
    qualification: "M.A., B.Ed.",
    experience: "8+ Years",
  },
  {
    name: "Mr. Arjun Singh",
    subject: "Computer Science",
    qualification: "M.Tech.",
    experience: "9+ Years",
  },
  {
    name: "Mrs. Neha Kapoor",
    subject: "Social Science",
    qualification: "M.A., B.Ed.",
    experience: "11+ Years",
  },
  {
    name: "Mr. Karan Malhotra",
    subject: "Physical Education",
    qualification: "M.P.Ed.",
    experience: "7+ Years",
  },
];
function Faculty() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span>OUR FACULTY</span>
          <h1>Meet Our Dedicated Teachers</h1>
          <p>
            Experienced educators who guide, inspire and support
            every student throughout their learning journey.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <span>EXPERT EDUCATORS</span>
          <h2>Our Teaching Team</h2>
          <p>
            Our faculty combines subject expertise with a
            student-focused approach to education.
          </p>
        </div>
        <div className="teacher-grid">
          {teachers.map((teacher) => (
            <div className="teacher-card" key={teacher.name}>
              <div className="teacher-avatar">
                {teacher.name.charAt(0)}
              </div>
              <h3>{teacher.name}</h3>
              <span className="teacher-subject">
                {teacher.subject}
              </span>
              <p>{teacher.qualification}</p>
              <small>{teacher.experience} Experience</small>
            </div>
          ))}

        </div>

      </section>
    </>
  );
}
export default Faculty;
