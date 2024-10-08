import  { useState } from "react";
import FormInput from "../ui/FormInputs";
import { useNavigate } from "react-router-dom";

const InviteTeam = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/signup/upload-document"); // Navigate to the next step
  };

  return (
    <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh">
      <h2 className="text-2xl font-semibold">Invite Your Team</h2>
      <form onSubmit={handleNext} className="bg-white shadow-lg p-8 w-[512px]">
        <FormInput
          type="email"
          name="email"
          placeholder="Enter team member's email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="p-2 w-full mt-8 bg-blue-500 text-white rounded">
          Next
        </button>
      </form>
    </div>
  );
};

export default InviteTeam;
