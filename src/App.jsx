import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Signup from "./component/SignUp";
import LandingPage from "./pages/LandingPage";
import GeneralLayout from "./applayout/GeneralLayout";
import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import Exams from "./pages/Exams";
import Features from "./pages/Features";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/dashboard",
      element: <GeneralLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/dashboard/teachers",
          element: <Teachers />,
        },
        {
          path: "/dashboard/students",
          element: <Students />,
        },
        {
          path: "/dashboard/billing",
          element: <Billing />,
        },
        {
          path: "/dashboard/settings",
          element: <Settings />,
        },
        {
          path: "/dashboard/exams",
          element: <Exams />,
        },
        {
          path: "/dashboard/features",
          element: <Features />,
        }
      ],
    },
  ]);
  return (
    <div>
      {/* <Signup/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// import CreateAccountWrapper from "./component/auth/create-account/createAccountWrapper";
{
  /* <CreateAccountWrapper /> */
}
