import { useState } from "react";
function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <section className="page-hero">
        <div>
          <span>ADMISSIONS</span>
          <h1>Start Your Journey With AXIS School</h1>
          <p>
            Take the first step towards an inspiring and
            rewarding educational journey.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="admission-layout">
          <div className="admission-info">
            <span className="section-label">
              ADMISSION PROCESS
            </span>
            <h2>
              Join the
              <span> AXIS Community</span>
            </h2>
            <p>
              Our admission process is designed to be simple,
              transparent and convenient for parents and students.
            </p>
            <div className="admission-steps">
              <div>
                <strong>01</strong>
                <section>
                  <h3>Submit Enquiry</h3>
                  <p>Complete the admission enquiry form.</p>
                </section>
              </div>
              <div>
                <strong>02</strong>
                <section>
                  <h3>School Interaction</h3>
                  <p>Meet our admission team and faculty.</p>
                </section>
              </div>
              <div>
                <strong>03</strong>
                <section>
                  <h3>Assessment</h3>
                  <p>Complete the required assessment process.</p>
                </section>
              </div>
              <div>
                <strong>04</strong>
                <section>
                  <h3>Confirmation</h3>
                  <p>Complete admission formalities and join AXIS.</p>
                </section>
              </div>
            </div>
          </div>
          <div className="admission-form-card">
            <h2>Admission Enquiry</h2>
            {submitted ? (
              <div className="form-success">
                <div>✅</div>
                <h3>Thank You!</h3>
                <p>
                  Your admission enquiry has been submitted.
                  Our team will contact you soon.
                </p>
                <button onClick={() => setSubmitted(false)}>
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <label>Parent Name</label>
                    <input
                      type="text"
                      placeholder="Enter parent name"
                      required
                    />
                  </div>
                  <div>
                    <label>Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                />
                <label>Student Name</label>
                <input
                  type="text"
                  placeholder="Enter student name"
                  required
                />
                <label>Class Applying For</label>
                <select required defaultValue="">
                  <option value="" disabled>
                    Select class
                  </option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                  <option>Class 6</option>
                  <option>Class 7</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                  <option>Class 12</option>
                </select>
                <label>Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                />
                <button type="submit">
                  Submit Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default Admissions;
