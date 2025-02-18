import React from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "./components/Sidebar";
import { ATTENDANCE_DATA } from "./data/ATTENDANCE_DATA";
import TopNav from "./components/TopNav";
import Filters from "./components/Filters";
import EmployeeList from "./components/EmployeeList";
import EmployeeHeader from "./components/EmployeeHeader";
import AttendanceDetails from "./components/AttendanceDetails";

const AttendanceDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#E3E5FB]">
      {/* Left Sidebar - Hidden on smaller screens */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-x-auto">
        <TopNav />
        <Filters />

        {/* Flex container for EmployeeList and AttendanceDetails */}
        <div className="flex flex-col lg:flex-row">
          {/* EmployeeList - Full width on small screens, fixed width on larger screens */}
          <div className="w-full lg:w-64 ">
            <EmployeeList />
          </div>

          {/* AttendanceDetails - Takes remaining space */}
          <div className="flex-1 flex flex-col p-2 ml-2">
            <EmployeeHeader />
            <AttendanceDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;