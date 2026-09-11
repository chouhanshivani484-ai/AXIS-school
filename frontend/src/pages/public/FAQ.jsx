import { useState } from "react";
const faqs = [
  {
    question: "What classes does AXIS School offer?",
    answer:
      "AXIS School offers classes from primary through senior school, with age-appropriate academic programs.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can submit an admission enquiry through our Admissions page. Our admission team will contact you with the next steps.",
  },
  {
    question: "Does the school provide transportation?",
    answer:
      "Yes. School transportation facilities are available for students across designated routes.",
  },
  {
    question: "What extracurricular activities are available?",
    answer:
      "Students can participate in sports, arts, music, cultural activities, competitions and various clubs.",
  },
  {
    question: "How can parents track student performance?",
    answer:
      "Registered parents will be able to use the Parent Portal to view attendance, results, fees and other student information.",
  },
  {
    question: "Does AXIS School have a student portal?",
    answer:
      "Yes. Students will have access to a dedicated portal for attendance, timetable, homework, results and fees.",
  },
];
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="page-hero">
        <div>
          <span>FAQ</span>
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to some of the most common questions
            about AXIS School.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="faq-wrapper">
          <div className="section-heading">
            <span>HELP CENTER</span>
            <h2>
              How Can We Help?
            </h2>
            <p>
              Browse the questions below to find the information
              you're looking for.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${
                  openIndex === index ? "active" : ""
                }`}
                key={faq.question}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <strong>
                    {openIndex === index ? "−" : "+"}
                  </strong>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default FAQ;
