/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FormInput from "../ui/FormInputs";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Here, you might want to add password validation logic
    navigate("/signup/invite-team"); // Navigate to the next step
  };

  return (
    <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh ">
    <div className="SIGNUP-HEADER">
      <h2 className="text-[36px] leading-[44.65px] font-[600] text-[#4F4F4F]">
      Udemy school, Choose your password
      </h2>
    </div>

    <div className="bg-white shadow-lg p-8 w-[512px] ">
      <div className="">
        <p className="w-[238px] mx-auto py-4 p-2 text-[#667085] leading-[1.5625rem] font-[500] font-inter ">
         Choose Your Password
        </p>
      </div>
      <form onSubmit={handleNext} className="w-[50%] mx-auto">
        <FormInput
          type="password"
          name="password"
          placeholder="Choose a password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit" className="p-2 w-full mt-8 bg-blue-500 text-white rounded">
          Next
        </button>
      </form>
    </div>
  </div>
  );
};

export default Password;
