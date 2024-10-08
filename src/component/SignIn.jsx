import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh">
      <h2 className="text-2xl font-semibold">SignIn</h2>
      <form className="bg-white shadow-lg p-8 w-[512px]">
        {/* Add your input fields for SignIn */}
        <button type="submit" className="p-2 w-full mt-8 bg-blue-500 text-white rounded">
          Log In
        </button>
      </form>
      <p className="text-center p-2 text-[12px]">
        Don&apos;t have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
