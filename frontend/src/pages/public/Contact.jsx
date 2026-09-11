function Contact() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span>CONTACT US</span>
          <h1>We'd Love To Hear From You</h1>
          <p>
            Have a question about admissions, academics or
            school facilities? Get in touch with our team.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">
              GET IN TOUCH
            </span>
            <h2>
              Let's Start a
              <span> Conversation</span>
            </h2>
            <p>
              Our team is available to answer your questions
              and help you with any information you need.
            </p>
            <div className="contact-item">
              <div>📍</div>
              <section>
                <strong>Address</strong>
                <p>
                  AXIS School Campus,
                  New Delhi, India
                </p>
              </section>
            </div>
            <div className="contact-item">
              <div>📞</div>
              <section>
                <strong>Phone</strong>
                <p>+91 98765 43210</p>
              </section>
            </div>
            <div className="contact-item">
              <div>✉️</div>
              <section>
                <strong>Email</strong>
                <p>info@axisschool.edu</p>
              </section>
            </div>
            <div className="contact-item">
              <div>🕐</div>
              <section>
                <strong>Office Hours</strong>
                <p>Monday – Saturday, 8:00 AM – 4:00 PM</p>
              </section>
            </div>
          </div>
          <div className="contact-form-card">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-row">
                <div>
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
              />
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
              />
              <button type="submit">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
