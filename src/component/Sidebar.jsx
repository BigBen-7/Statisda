/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/udemy-logo.svg";
import { Link } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { PiExamFill } from "react-icons/pi";
import { RiBankLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="w-80 bg-[#152259] text-[#fff] ">
      <div className="flex flex-col justify-between items-center py-3">
        {/* logo and navlink */}
        <div className="w-full py-3">

          {/* LOGO-DIV  */}
          <div className="flex justify-center items-center flex-col py-3 ">
            <img src={logo} alt="logo" />
            <p className="font-[600] pt-4">Udemy Inter. school</p>
          </div>
          {/* divider */}
          <div className="border-b my-3 w-full border-gray-300"></div>
          {/* navlink */}
           <div className="flex justify-center">
          <div className="flex flex-col justify-center font-semibold gap-6 my-12">
           <Link to="/dashboard">
            <RiHome5Line className="inline" /> <span className="pl-4 align-middle" >Dashboard</span>
              
            </Link>
            <Link to="/dashboard/teachers">
            <FaChalkboardTeacher className="inline" /><span className="pl-4 align-middle" >Teachers</span>
              
            </Link>
            <Link to="/dashboard/students">
            <GiGraduateCap className="inline" /> <span className="pl-4 align-middle" >Students/ classes</span>
        
          </Link>
          <Link to="/dashboard/billing">
          <FaMoneyBillTransfer className="inline" />  <span className="pl-4 align-middle" >Billing</span>
          </Link>
          <Link to="/dashboard/settings">
          <IoSettingsOutline className="inline" />  <span className="pl-4 align-middle" >Settings and Profile</span>
          </Link>
          <Link to="/dashboard/exams">
          <PiExamFill className="inline" /> <span className="pl-4 align-middle" >Exams</span>
          </Link>
        
            </div> 
          </div>
        </div>

        {/* features */}
        <div className="my-16 mb-[5.8rem]">
          <Link to="/dashboard/features" className="flex items-center gap-4">
            <RiBankLine /> Features
            <span className="px-[7px] text-black font-semibold bg-[#B9D7F1] text-xs rounded-lg">
              NEW
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
