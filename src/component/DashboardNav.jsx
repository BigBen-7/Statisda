import { useLocation } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

function DashboardNav() {
  const location = useLocation();

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="bg-[#FCFAFA]  p-6 ">
      <div className="flex justify-around items-center">
        <div className="text-[#424242]" >
          {checkLocation("/dashboard") && (
            <p className="flex flex-col">
              <span>Learn how to launch faster</span>
              <span>
                watch our webinar for tips from our experts and get a limited
                time offer.
              </span>
            </p>
          )}
        </div>
        <div className="">
          <span className="pr-8">
            <IoIosNotificationsOutline className="inline text-xl" />
          </span>
          <button className="px-[14px] py-[6px]  text-white font-semibold bg-[#509CDB] text-xs rounded-[.5rem]">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
