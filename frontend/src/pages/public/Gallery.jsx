const galleryItems = [
  { icon: "🏫", title: "School Campus" },
  { icon: "🔬", title: "Science Laboratory" },
  { icon: "📚", title: "Library" },
  { icon: "⚽", title: "Sports Day" },
  { icon: "🎭", title: "Annual Function" },
  { icon: "🎨", title: "Art Exhibition" },
  { icon: "🏆", title: "Prize Distribution" },
  { icon: "🌳", title: "Campus Activities" },
];
function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span>SCHOOL GALLERY</span>
          <h1>
            Moments That Inspire
          </h1>
          <p>
            Explore memorable moments from academics,
            celebrations, competitions and campus life.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <span>MEMORIES</span>
          <h2>
            Life at AXIS School
          </h2>
          <p>
            Every day brings new opportunities to learn,
            participate and create lasting memories.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-card" key={item.title}>
              <div className="gallery-placeholder">
                <span>{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Gallery;
