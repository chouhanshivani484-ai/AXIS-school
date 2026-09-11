const facilities = [
  {
    icon: "🔬",
    title: "Science Laboratories",
    description:
      "Well-equipped physics, chemistry and biology laboratories for practical learning.",
  },
  {
    icon: "💻",
    title: "Computer Labs",
    description:
      "Modern computer laboratories with technology-focused learning environments.",
  },
  {
    icon: "📚",
    title: "Digital Library",
    description:
      "A rich collection of books, digital resources and educational materials.",
  },
  {
    icon: "⚽",
    title: "Sports Complex",
    description:
      "Dedicated spaces for football, basketball, athletics and indoor sports.",
  },
  {
    icon: "🎨",
    title: "Arts & Creativity",
    description:
      "Creative spaces where students can explore art, music and performing arts.",
  },
  {
    icon: "🚌",
    title: "School Transport",
    description:
      "Safe and reliable transportation facilities for students.",
  },
];
function Facilities() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span>OUR FACILITIES</span>
          <h1>
            A Modern Campus Built For Learning
          </h1>
          <p>
            Safe, comfortable and technology-enabled facilities
            that support academic and personal development.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <span>CAMPUS FACILITIES</span>
          <h2>
            Everything Students Need
          </h2>
          <p>
            From laboratories to sports facilities, we create
            opportunities for students to learn beyond the classroom.
          </p>
        </div>
        <div className="facility-grid">
          {facilities.map((facility) => (
            <div className="facility-card" key={facility.title}>
              <div className="facility-icon">
                {facility.icon}
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Facilities;
