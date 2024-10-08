/* eslint-disable no-unused-vars */
import React from "react";
import { TiUser } from "react-icons/ti";
import { GiGraduateCap } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";

function Dashboard() {
  return (
    <div className="text-[#4F4F4F]">
      {/* DASHBOARD HEADER */}
      <div className="font-semibold px-24  text-4xl">
        <h1>Welcome to your dashboard, Udemy school</h1>
      </div>

      {/* DASHBOARD OPTIONS */}
      <div className="flex  justify-around items-center  ">
        <div className="flex flex-col">
          {/* SCHOOL EMAIL div */}
          <div className="py-4 mb-6">
            <p className="font-semibold text-xl">Uyo/school/@teachable.com</p>
          </div>

          <div className="">
            <div className="flex gap-2 mb-8">
              <TiUser className="inline bg-[#EFF3FA] p-[3px] rounded-lg text-3xl text-[#13296A]" />
              <div className="ml-4">
                <h4 className="font-semibold text-2xl  mb-2">
                  Add other admins
                </h4>
                <p className="max-w-md font-normal text-sm ">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
            {/* //////////// */}
            <div className="flex gap-2 mb-8">
              <SiGoogleclassroom className="inline bg-[#EFF3FA] p-[3px] rounded-lg text-3xl text-[#13296A]" />
              <div className="ml-4">
                <h4 className="font-semibold text-2xl  mb-2">Add Classes</h4>
                <p className="max-w-md font-normal text-xss text-[#4F4F4F] ">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
            {/* ////////// */}
            <div className="flex gap-2 ">
              <GiGraduateCap className="inline bg-[#EFF3FA] p-[3px] rounded-lg text-3xl text-[#13296A]" />
              <div className="ml-4">
                <h4 className="font-semibold text-2xl  mb-2">Add Students</h4>
                <p className="max-w-md font-normal text-sm ">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SUPPORT DIV */}
        <div className="flex flex-col items-end h-[300px] justify-end">
          <p className="bg-[#152259] text-[#FCFAFA] rounded-full px-4 py-4">
              <BiSupport className="inline" />
            <span className=" pl-1 pr-4 align-middle" >
            Support
            </span>
            <IoIosArrowUp className="inline" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// {/* <div className="">
// <p>
//   <span className="font-semibold text-2xl align-middle ml-6">
//     Add Admins
//   </span>
// </p>
// </div> */}
