const classes = [
  {
    name: "Class 1",
    age: "6–7 Years",
    subjects: "English, Maths, EVS, Hindi",
  },
  {
    name: "Class 2",
    age: "7–8 Years",
    subjects: "English, Maths, EVS, Hindi",
  },
  {
    name: "Class 3",
    age: "8–9 Years",
    subjects: "English, Maths, Science, Hindi",
  },
  {
    name: "Class 4",
    age: "9–10 Years",
    subjects: "English, Maths, Science, Social Studies",
  },
  {
    name: "Class 5",
    age: "10–11 Years",
    subjects: "English, Maths, Science, Social Studies",
  },
  {
    name: "Class 6",
    age: "11–12 Years",
    subjects: "English, Maths, Science, Social Science",
  },
  {
    name: "Class 7",
    age: "12–13 Years",
    subjects: "English, Maths, Science, Social Science",
  },
  {
    name: "Class 8",
    age: "13–14 Years",
    subjects: "English, Maths, Science, Social Science",
  },
];
function Classes() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span>CLASSES</span>
          <h1>
            Explore Our Classes
          </h1>
          <p>
            Structured learning programs designed according
            to the academic and developmental needs of students.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <span>GRADE LEVELS</span>
          <h2>
            Find Your Class
          </h2>
          <p>
            Each grade provides a balanced combination of
            academic learning and co-curricular development.
          </p>
        </div>
        <div className="classes-grid">
          {classes.map((item) => (
            <div className="class-card" key={item.name}>
              <div className="class-number">
                {item.name.replace("Class ", "")}
              </div>
              <div>
                <h3>{item.name}</h3>
                <p className="class-age">
                  Age: {item.age}
                </p>
                <p>
                  <strong>Subjects:</strong>
                  <br />
                  {item.subjects}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Classes;
