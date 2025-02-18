import { useState } from "react";
import { ATTENDANCE_DATA } from "../data/ATTENDANCE_DATA";
import { Menu } from "lucide-react";

export default function EmployeeList() {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <div className="w-full lg:w-64 h-fit bg-white border-r lg:overflow-y-auto mx-2 my-2 lg:m-2 rounded-xl shadow-sm lg:shadow-none">
      {/* Toggle Button for Small Screens */}
      <button
        onClick={() => setIsListOpen(!isListOpen)}
        className={`lg:hidden w-full p-3 flex items-center justify-between bg-[#E3E5FB] transition-all ${
          isListOpen ? "rounded-t-xl" : "rounded-xl"
        }`}
      >
        <span className="font-semibold text-sm">Employee List</span>
        <Menu className="w-5 h-5" />
      </button>

      {/* Employee List */}
      <div
        className={`${
          isListOpen ? "block max-h-[calc(100vh-180px)]" : "hidden"
        } lg:block overflow-y-auto transition-all duration-300`}
      >
        <div className="space-y-0 p-1 lg:p-0">
          {ATTENDANCE_DATA.employeeList.slice(0, 10).map((emp, index) => (
            <div
              key={emp.id}
              className="px-1 py-1.5 lg:px-2 lg:py-2 hover:bg-gray-50 cursor-pointer"
            >
              <div
                className={`flex items-center p-3 lg:p-4 rounded-xl ${
                  index === 0 ? "bg-[#E3E5FB]" : "bg-[#F7F7FE]"
                }`}
              >
                <img
                  src={emp.image}
                  alt={emp.name}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                />
                <div className="ml-2 lg:ml-4">
                  <div className="font-semibold text-xs lg:text-sm">
                    {emp.name}
                  </div>
                  <div className="text-[10px] lg:text-xs text-gray-500">
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
    </div>
  );
}