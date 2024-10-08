/* eslint-disable react/prop-types */
import  { useState } from 'react';
import FormInput from '../ui/FormInputs'; // Adjust this import based on your form components

const Stepper = ({ currentStep }) => {
  const steps = [
    { label: 'Your details', description: 'Name and email' },
    { label: 'Choose a password', description: 'Choose a secure password' },
    { label: 'Invite your team', description: 'Start collaborating' },
    { label: 'Upload school\'s document', description: 'For account verification' },
  ];

  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto mt-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          <div className="relative flex items-center justify-center">
            {index > 0 && (
              <div className="absolute left-[-50%] top-[50%]  h-[2px] bg-green-300" />
            )}
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${currentStep > index + 1 ? 'bg-blue-500' : currentStep === index + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              {currentStep > index + 1 ? (
                <span>&#10003;</span> // Tick mark for completed steps
              ) : (
                <span>{index + 1}</span> // Step number for active and future steps
              )}
            </div>
          </div>
          <div className="mt-2 text-center">
            <p className={`font-medium text-sm ${currentStep >= index + 1 ? 'text-blue-500' : 'text-gray-500'}`}>
              {step.label}
            </p>
            <p className={`text-xs ${currentStep >= index + 1 ? 'text-blue-500' : 'text-gray-400'}`}>
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    teamEmails: "",
    // Add other fields as necessary
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Handle validation based on the current step
    if (currentStep === 1) {
      // Validate the first step
      if (formData.username && formData.email) {
        setCurrentStep(2); // Move to the password step
      } else {
        alert("Please fill in all fields");
      }
    } else if (currentStep === 2) {
      // Move to the invite team step
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Move to upload documents or finish
      setCurrentStep(4);
    } else if (currentStep === 4) {
      // Final step (submit)
      alert("You have completed the sign-up process!");
      // Reset form or navigate to the next page if necessary
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh">
      <div className="SIGNUP-HEADER">
        <h2 className="text-[36px] leading-[44.65px] font-[600] text-[#4F4F4F]">
          {currentStep === 1
            ? "Welcome, create your school account"
            : currentStep === 2
            ? "Choose your password"
            : currentStep === 3
            ? "Invite your team"
            : "Upload your school's documents"}
        </h2>
      </div>

      <div className="bg-white shadow-lg p-8 w-[512px]">
        <div className="text-center">
          <p className="w-[238px] mx-auto py-4 text-[#667085] leading-[1.5625rem] font-[500] font-inter ">
            {currentStep === 1
              ? "It is our great pleasure to have you on board!"
              : currentStep === 2
              ? "Please create a secure password."
              : currentStep === 3
              ? "Let’s invite your team members!"
              : "Almost there! Upload your documents."}
          </p>
        </div>
        <form onSubmit={handleNext} className="w-[50%] mx-auto ">
          {currentStep === 1 && (
            <>
              <FormInput
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </>
          )}
          {currentStep === 2 && (
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          )}
          {currentStep === 3 && (
            <FormInput
              type="text"
              name="teamEmails"
              placeholder="Invite team members (comma separated emails)"
              value={formData.teamEmails}
              onChange={handleChange}
            />
          )}
          {currentStep === 4 && (
            <div>
              <h3 className="text-lg">Upload your documents</h3>
              <input type="file" name="uploadDetails" />
            </div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="p-2 w-full bg-gray-300 text-black rounded"
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className="p-2 w-full bg-blue-500 text-white rounded"
            >
              {currentStep === 4 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>

      {/* Stepper Component below the form */}
      <Stepper currentStep={currentStep} />
    </div>
  );
};

export default Signup;


// import { useState } from "react";
// import FormInput from "../ui/FormInputs"; 
// import Stepper from "./Stepper";


// const Signup = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     admin: "",
//     email: "",
//     schoolName: "",
//     schoolEmail: "",
//     password: "",
//     confirmPassword: "",
//     teamEmails: "",
    
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleNext = (e) => {
//     e.preventDefault();
//     // Handle validation based on the current step
//     if (currentStep === 1) {
//       // Validate the first step
//       if (
//         formData.admin &&
//         formData.schoolName &&
//         formData.schoolEmail &&
//         formData.email 
//       ) {
//         setCurrentStep(2); // Move to the password step
//       } else {
//         alert("Please fill in all fields");
//       }
//     } else if (currentStep === 2) {
//       // Move to the invite team step
//       setCurrentStep(3);
//     } else if (currentStep === 3) {
//       // Move to upload documents or finish
//       setCurrentStep(4);
//     } else if (currentStep === 4) {
//       // Final step (submit)
//       alert("You have completed the sign-up process!");
//       // Reset form or navigate to the next page if necessary
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 1) setCurrentStep(currentStep - 1);
//   };

//   return (
//     <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh">
//       <div className="SIGNUP-HEADER">
//         <h2 className="text-[36px] leading-[44.65px] font-[600] text-[#4F4F4F]">
//           {currentStep === 1
//             ? "Welcome, create your school account"
//             : currentStep === 2
//             ? "Choose your password"
//             : currentStep === 3
//             ? "Invite your team"
//             : "Upload your school's documents"}
//         </h2>
//       </div>

//       <div className="bg-white shadow-lg p-8 w-[512px]">
//         <div className="text-center">
//           <p className="w-[238px] mx-auto py-4 text-[#667085] leading-[1.5625rem] font-[500] font-inter ">
//             {currentStep === 1
//               ? "It is our great pleasure to have you on board!"
//               : currentStep === 2
//               ? "Please create a secure password."
//               : currentStep === 3
//               ? "Let’s invite your team members!"
//               : "Almost there! Upload your documents."}
//           </p>
//         </div>
//         <form onSubmit={handleNext} className="w-[50%] mx-auto ">
//           {currentStep === 1 && (
//             <>
//               <FormInput
//                 type="text"
//                 name="admin"
//                 placeholder="Enter name of Admin"
//                 value={formData.admin}
//                 onChange={handleChange}
//               />
//               <FormInput
//                 type="text" 
//                 name="schoolName"
//                 placeholder="Enter name of School"
//                 value={formData.schoolName}
//                 onChange={handleChange}
//               />
//               <FormInput
//                 type="email"
//                 name="schoolEmail"
//                 placeholder="Enter School Email"
//                 value={formData.schoolEmail}
//                 onChange={handleChange}
//               />
//             </>
//           )}
//           {currentStep === 2 && (
//             <FormInput
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           )}
//           {currentStep === 3 && (
//             <FormInput
//               type="text"
//               name="teamEmails"
//               placeholder="Invite team members (comma separated emails)"
//               value={formData.teamEmails}
//               onChange={handleChange}
//             />
//           )}
//           {currentStep === 4 && (
//             <div>
//               <h3 className="text-lg">Upload your documents</h3>
//               <input type="file" name="uploadDetails" />
//             </div>
//           )}

//           <div className="flex justify-between mt-8">
//             {currentStep > 1 && (
//               <button
//                 type="button"
//                 onClick={handlePrevious}
//                 className="p-2 w-full bg-gray-300 text-black rounded"
//               >
//                 Previous
//               </button>
//             )}
//             <button
//               type="submit"
//               className="p-2 w-full bg-blue-500 text-white rounded"
//             >
//               {currentStep === 4 ? "Submit" : "Next"}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Stepper Component below the form */}
//       <Stepper currentStep={currentStep} />
//     </div>
//   );
// };

// export default Signup;

