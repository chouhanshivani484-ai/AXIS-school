// import { useState } from "react";
// import { createAdmission } from "../services/admissionService";

// function Admissions() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [formData, setFormData] = useState({
//     studentName: "",
//     fatherName: "",
//     motherName: "",
//     email: "",
//     phone: "",
//     dateOfBirth: "",
//     gender: "",
//     className: "",
//     address: "",
//     city: "",
//     state: "",
//     previousSchool: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError("");

//     try {
//       console.log("Sending admission data:", formData);

//       const result = await createAdmission(formData);

//       console.log("Admission saved:", result);

//       setSubmitted(true);

//       setFormData({
//         studentName: "",
//         fatherName: "",
//         motherName: "",
//         email: "",
//         phone: "",
//         dateOfBirth: "",
//         gender: "",
//         className: "",
//         address: "",
//         city: "",
//         state: "",
//         previousSchool: "",
//       });
//     } catch (err) {
//       console.error("Admission Error:", err);

//       setError(
//         err.message || "Admission submission failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <section className="page-hero">
//         <div>
//           <span>ADMISSIONS</span>

//           <h1>Start Your Journey With AXIS School</h1>

//           <p>
//             Take the first step towards an inspiring and
//             rewarding educational journey.
//           </p>
//         </div>
//       </section>

//       <section className="content-section">
//         <div className="admission-layout">

//           {/* LEFT SIDE */}
//           <div className="admission-info">

//             <span className="section-label">
//               ADMISSION PROCESS
//             </span>

//             <h2>
//               Join the
//               <span> AXIS Community</span>
//             </h2>

//             <p>
//               Our admission process is designed to be simple,
//               transparent and convenient for parents and students.
//             </p>

//             <div className="admission-steps">

//               <div>
//                 <strong>01</strong>

//                 <section>
//                   <h3>Submit Enquiry</h3>
//                   <p>
//                     Complete the admission enquiry form.
//                   </p>
//                 </section>
//               </div>

//               <div>
//                 <strong>02</strong>

//                 <section>
//                   <h3>School Interaction</h3>
//                   <p>
//                     Meet our admission team and faculty.
//                   </p>
//                 </section>
//               </div>

//               <div>
//                 <strong>03</strong>

//                 <section>
//                   <h3>Assessment</h3>
//                   <p>
//                     Complete the required assessment process.
//                   </p>
//                 </section>
//               </div>

//               <div>
//                 <strong>04</strong>

//                 <section>
//                   <h3>Confirmation</h3>
//                   <p>
//                     Complete admission formalities and join AXIS.
//                   </p>
//                 </section>
//               </div>

//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="admission-form-card">

//             <h2>Admission Enquiry</h2>

//             {submitted ? (
//               <div className="form-success">

//                 <div>✅</div>

//                 <h3>Thank You!</h3>

//                 <p>
//                   Your admission enquiry has been submitted.
//                   Our team will contact you soon.
//                 </p>

//                 <button
//                   onClick={() => {
//                     setSubmitted(false);
//                     setError("");
//                   }}
//                 >
//                   Submit Another Enquiry
//                 </button>

//               </div>
//             ) : (
//               <form onSubmit={handleSubmit}>

//                 {/* ERROR */}
//                 {error && (
//                   <div
//                     style={{
//                       background: "#fee2e2",
//                       color: "#b91c1c",
//                       padding: "12px",
//                       borderRadius: "8px",
//                       marginBottom: "18px",
//                     }}
//                   >
//                     {error}
//                   </div>
//                 )}

//                 {/* PARENT / FATHER */}
//                 <div className="form-row">

//                   <div>
//                     <label>Father Name</label>

//                     <input
//                       type="text"
//                       name="fatherName"
//                       value={formData.fatherName}
//                       onChange={handleChange}
//                       placeholder="Enter father name"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label>Mother Name</label>

//                     <input
//                       type="text"
//                       name="motherName"
//                       value={formData.motherName}
//                       onChange={handleChange}
//                       placeholder="Enter mother name"
//                     />
//                   </div>

//                 </div>

//                 {/* PHONE */}
//                 <label>Phone</label>

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter phone number"
//                   required
//                 />

//                 {/* EMAIL */}
//                 <label>Email</label>

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter email address"
//                   required
//                 />

//                 {/* STUDENT NAME */}
//                 <label>Student Name</label>

//                 <input
//                   type="text"
//                   name="studentName"
//                   value={formData.studentName}
//                   onChange={handleChange}
//                   placeholder="Enter student name"
//                   required
//                 />

//                 {/* DATE OF BIRTH */}
//                 <label>Date of Birth</label>

//                 <input
//                   type="date"
//                   name="dateOfBirth"
//                   value={formData.dateOfBirth}
//                   onChange={handleChange}
//                   required
//                 />

//                 {/* GENDER */}
//                 <label>Gender</label>

//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select gender
//                   </option>

//                   <option value="Male">
//                     Male
//                   </option>

//                   <option value="Female">
//                     Female
//                   </option>

//                   <option value="Other">
//                     Other
//                   </option>
//                 </select>

//                 {/* CLASS */}
//                 <label>Class Applying For</label>

//                 <select
//                   name="className"
//                   value={formData.className}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select class
//                   </option>

//                   <option value="Class 1">Class 1</option>
//                   <option value="Class 2">Class 2</option>
//                   <option value="Class 3">Class 3</option>
//                   <option value="Class 4">Class 4</option>
//                   <option value="Class 5">Class 5</option>
//                   <option value="Class 6">Class 6</option>
//                   <option value="Class 7">Class 7</option>
//                   <option value="Class 8">Class 8</option>
//                   <option value="Class 9">Class 9</option>
//                   <option value="Class 10">Class 10</option>
//                   <option value="Class 11">Class 11</option>
//                   <option value="Class 12">Class 12</option>
//                 </select>

//                 {/* PREVIOUS SCHOOL */}
//                 <label>Previous School</label>

//                 <input
//                   type="text"
//                   name="previousSchool"
//                   value={formData.previousSchool}
//                   onChange={handleChange}
//                   placeholder="Enter previous school name"
//                 />

//                 {/* ADDRESS */}
//                 <label>Address</label>

//                 <textarea
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   rows="3"
//                   placeholder="Enter complete address"
//                   required
//                 />

//                 {/* CITY / STATE */}
//                 <div className="form-row">

//                   <div>
//                     <label>City</label>

//                     <input
//                       type="text"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       placeholder="Enter city"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label>State</label>

//                     <input
//                       type="text"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleChange}
//                       placeholder="Enter state"
//                       required
//                     />
//                   </div>

//                 </div>

//                 {/* SUBMIT */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                 >
//                   {loading
//                     ? "Submitting..."
//                     : "Submit Enquiry →"}
//                 </button>

//               </form>
//             )}

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Admissions;/

import { useState } from "react";
import { createAdmission } from "../services/admissionService";

function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    className: "",
    address: "",
    city: "",
    state: "",
    previousSchool: "",
  });

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // SUBMIT ADMISSION
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      console.log("Sending admission data:", formData);

      const result = await createAdmission(formData);

      console.log("Admission saved successfully:", result);

      setSubmitted(true);

      // Clear form
      setFormData({
        studentName: "",
        fatherName: "",
        motherName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        className: "",
        address: "",
        city: "",
        state: "",
        previousSchool: "",
      });
    } catch (err) {
      console.error("Admission Error:", err);

      setError(
        err.message ||
          "Admission submission failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // SUCCESS SCREEN
  // ==========================================

  if (submitted) {
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
                    <p>
                      Complete the admission enquiry form.
                    </p>
                  </section>
                </div>

                <div>
                  <strong>02</strong>

                  <section>
                    <h3>School Interaction</h3>
                    <p>
                      Meet our admission team and faculty.
                    </p>
                  </section>
                </div>

                <div>
                  <strong>03</strong>

                  <section>
                    <h3>Assessment</h3>
                    <p>
                      Complete the required assessment process.
                    </p>
                  </section>
                </div>

                <div>
                  <strong>04</strong>

                  <section>
                    <h3>Confirmation</h3>
                    <p>
                      Complete admission formalities and join AXIS.
                    </p>
                  </section>
                </div>

              </div>
            </div>

            <div className="admission-form-card">

              <div className="form-success">
                <div className="success-icon">✅</div>

                <h3>Admission Submitted Successfully!</h3>

                <p>
                  Thank you for applying to AXIS School.
                  Your admission application has been received.
                  Our admission team will contact you soon.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                >
                  Submit Another Application
                </button>
              </div>

            </div>

          </div>
        </section>
      </>
    );
  }

  // ==========================================
  // MAIN ADMISSION PAGE
  // ==========================================

  return (
    <>
      {/* =====================================
          PAGE HERO
      ====================================== */}

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

      {/* =====================================
          ADMISSION CONTENT
      ====================================== */}

      <section className="content-section">

        <div className="admission-layout">

          {/* =================================
              LEFT SIDE
          ================================== */}

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

              {/* STEP 1 */}

              <div>
                <strong>01</strong>

                <section>
                  <h3>Submit Enquiry</h3>

                  <p>
                    Complete the admission enquiry form.
                  </p>
                </section>
              </div>

              {/* STEP 2 */}

              <div>
                <strong>02</strong>

                <section>
                  <h3>School Interaction</h3>

                  <p>
                    Meet our admission team and faculty.
                  </p>
                </section>
              </div>

              {/* STEP 3 */}

              <div>
                <strong>03</strong>

                <section>
                  <h3>Assessment</h3>

                  <p>
                    Complete the required assessment process.
                  </p>
                </section>
              </div>

              {/* STEP 4 */}

              <div>
                <strong>04</strong>

                <section>
                  <h3>Confirmation</h3>

                  <p>
                    Complete admission formalities and join AXIS.
                  </p>
                </section>
              </div>

            </div>

          </div>

          {/* =================================
              RIGHT SIDE FORM
          ================================== */}

          <div className="admission-form-card">

            <h2>Admission Application</h2>

            <p className="form-description">
              Please fill in all the required information below.
            </p>

            {/* ERROR MESSAGE */}

            {error && (
              <div className="form-error">
                ❌ {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* =================================
                  STUDENT INFORMATION
              ================================== */}

              <h3 className="form-heading">
                Student Information
              </h3>

              {/* STUDENT NAME */}

              <label htmlFor="studentName">
                Student Name *
              </label>

              <input
                id="studentName"
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter student name"
                required
              />

              {/* FATHER + MOTHER */}

              <div className="form-row">

                <div>
                  <label htmlFor="fatherName">
                    Father Name *
                  </label>

                  <input
                    id="fatherName"
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Enter father name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="motherName">
                    Mother Name
                  </label>

                  <input
                    id="motherName"
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    placeholder="Enter mother name"
                  />
                </div>

              </div>

              {/* EMAIL + PHONE */}

              <div className="form-row">

                <div>
                  <label htmlFor="email">
                    Email *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">
                    Phone *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />
                </div>

              </div>

              {/* DATE OF BIRTH + GENDER */}

              <div className="form-row">

                <div>
                  <label htmlFor="dateOfBirth">
                    Date of Birth *
                  </label>

                  <input
                    id="dateOfBirth"
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="gender">
                    Gender *
                  </label>

                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select gender
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Female">
                      Female
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </div>

              {/* CLASS */}

              <label htmlFor="className">
                Class Applying For *
              </label>

              <select
                id="className"
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select class
                </option>

                <option value="Nursery">
                  Nursery
                </option>

                <option value="LKG">
                  LKG
                </option>

                <option value="UKG">
                  UKG
                </option>

                <option value="Class 1">
                  Class 1
                </option>

                <option value="Class 2">
                  Class 2
                </option>

                <option value="Class 3">
                  Class 3
                </option>

                <option value="Class 4">
                  Class 4
                </option>

                <option value="Class 5">
                  Class 5
                </option>

                <option value="Class 6">
                  Class 6
                </option>

                <option value="Class 7">
                  Class 7
                </option>

                <option value="Class 8">
                  Class 8
                </option>

                <option value="Class 9">
                  Class 9
                </option>

                <option value="Class 10">
                  Class 10
                </option>

                <option value="Class 11">
                  Class 11
                </option>

                <option value="Class 12">
                  Class 12
                </option>
              </select>

              {/* =================================
                  PREVIOUS SCHOOL
              ================================== */}

              <h3 className="form-heading">
                Previous Education
              </h3>

              <label htmlFor="previousSchool">
                Previous School
              </label>

              <input
                id="previousSchool"
                type="text"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                placeholder="Enter previous school name"
              />

              {/* =================================
                  ADDRESS
              ================================== */}

              <h3 className="form-heading">
                Address Information
              </h3>

              <label htmlFor="address">
                Address *
              </label>

              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                placeholder="Enter complete address"
                required
              />

              {/* CITY + STATE */}

              <div className="form-row">

                <div>
                  <label htmlFor="city">
                    City *
                  </label>

                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="state">
                    State *
                  </label>

                  <input
                    id="state"
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    required
                  />
                </div>

              </div>

              {/* =================================
                  SUBMIT BUTTON
              ================================== */}

              <button
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Submitting Application..."
                  : "Submit Admission Application →"}
              </button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}

export default Admissions;