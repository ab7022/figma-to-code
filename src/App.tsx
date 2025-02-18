import React from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "./components/Sidebar";
import {ATTENDANCE_DATA} from "./data/ATTENDANCE_DATA";
import TopNav from "./components/TopNav";
import Filters from "./components/Filters";
import EmployeeList from "./components/EmployeeList";
import EmployeeHeader from "./components/EmployeeHeader";
import AttendanceDetails from "./components/AttendanceDetails";

const AttendanceDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#E3E5FB]">
      {/* Left Sidebar */}
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <Filters />
        <div className="flex flex-row">
        <EmployeeList />

          <div className="flex-1 flex flex-col p-2">
          <EmployeeHeader />

            {/* Attendance Table */}
          <AttendanceDetails/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
