import { useState } from "react";
import { ATTENDANCE_DATA } from "../data/ATTENDANCE_DATA";
import { Menu } from "lucide-react"; // Import a menu icon for the toggle button

export default function EmployeeList() {
  const [isListOpen, setIsListOpen] = useState(false); // State to manage list visibility on small screens

  return (
    <div className="w-full lg:w-64 h-fit bg-white border-r overflow-y-auto m-2 rounded-xl">
      {/* Toggle Button for Small Screens */}
      <button
        onClick={() => setIsListOpen(!isListOpen)}
        className="lg:hidden w-full p-2 flex items-center justify-between bg-[#E3E5FB] rounded-t-xl"
      >
        <span className="font-semibold text-sm">Employee List</span>
        <Menu className="w-5 h-5" />
      </button>

      {/* Employee List */}
      <div
        className={`${
          isListOpen ? "block" : "hidden"
        } lg:block space-y-0 p-2 lg:p-0`}
      >
        {ATTENDANCE_DATA.employeeList.slice(0, 10).map((emp, index) => (
          <div
            key={emp.id}
            className="px-2 py-2 hover:bg-gray-50 cursor-pointer"
          >
            <div
              className={`flex items-center p-4 rounded-xl ${
                index === 0 ? "bg-[#E3E5FB]" : "bg-[#F7F7FE]"
              }`}
            >
              <img
                src={emp.image}
                alt={emp.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold text-sm ml-4">{emp.name}</div>
                <div className="text-xs text-gray-500 ml-1">
                  <span className="border-r pr-1 border-gray-300">
                    {emp.role}
                  </span>{" "}
                  {emp.department}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}