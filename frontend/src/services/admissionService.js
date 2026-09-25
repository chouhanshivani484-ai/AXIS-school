// const API_URL = "http://localhost:5000/api/admissions";

// export const createAdmission = async (admissionData) => {
//   const response = await fetch(API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(admissionData),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Admission submission failed");
//   }

//   return data;
// };  


const API_URL = "http://localhost:5000/api/admissions";

export const createAdmission = async (admissionData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(admissionData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Admission submission failed");
  }

  return data;
};