import React from "react";
import {
  ChevronDown,
  MoreHorizontal,
  Link,
  MessageCircle,
  Clock,
  MapPin,
  User,
  MoreVertical,
} from "lucide-react";
import {data} from "../data/ATTENDANCE_DATA";
const AttendanceTable = () => {


  return (
    <div className="w-full shadow-md rounded-lg overflow-hidden mt-3 bg-white">
      <div className="border border-gray-300 rounded-lg overflow-hidden bg-white ">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-1 py-1 text-left border border-gray-200">
                <span className="text-sm font-medium">Date</span>
              </th>
              <th className="px-1 py-1 text-left border border-gray-200">
                <span className="text-sm font-medium">
                  {" "}
                  Time planned + WH
                </span>
              </th>
              <th className="px-1 py-1 text-left border border-gray-200">
                <span className="text-sm font-medium"> Actual Time</span>
              </th>
              <th className="px-1 py-1 text-left border border-gray-200">
                <span className="text-sm font-medium"> Fine/Bonus</span>
              </th>
              <th className="px-1 py-1 text-center border border-gray-200">
                <span className="text-sm font-medium">Error</span>
              </th>
              <th className="px-1 py-1 text-left border border-gray-200">
                <span className="text-sm font-medium">Cal. Att.</span>
              </th>
              <th className="px-1 py-1 text-left border border-gray-200">
                <span className="text-sm font-medium"> Final Att.</span>
              </th>
              <th className="px-1 py-1 text-center w-32 border border-gray-200">
                <span className="text-sm font-medium"> Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 font-semibold">
                <td className="px-2 py-1 border border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-black">{row.day}</span>
                    <span className="text-xs font-bold text-gray-900">{row.date}</span>
                  </div>
                </td>
                <td className="px-1 py-1 border border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-black">
                      {row.timePlanned}
                    </span>
                    <span className="text-xs text-gray-300">●</span>
                    <span className="text-xs text-black">
                      {row.workHours}
                    </span>
                  </div>
                </td>
                <td className="px-1 py-1 border border-gray-200">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs ${
                        row.actualTime.includes("02:32") ||
                        row.actualTime.includes("05:32")
                          ? "text-red-500"
                          : row.actualTime.includes("09:32")
                          ? "text-amber-500"
                          : "text-gray-900"
                      }`}
                    >
                      {row.actualTime}
                    </span>
                    <span className="text-xs text-gray-300">●</span>
                    <span className="text-xs text-black">
                      {row.overtime}
                    </span>
                  </div>
                </td>
                <td className="px-1 py-1 border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="flex  justify-start">
                     <span className="text-xs text-green-500 mr-2">
                      {row.fineBonus}
                    </span>
                    <span className="text-xs text-gray-300 line-through">
                      {row.bonusExtra}
                    </span>
                    </div>
                   
                    <button className="p-1 flex  justify-end rounded-full hover:bg-gray-100">
                      <MoreVertical className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </td>
                <td className="px-1 py-1 border border-gray-200">
                  <div className="flex justify-center gap-1">
                    {row.errors.includes("location") && (
                      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                        <MapPin className="w-3 h-3 text-red-500" />
                      </div>
                    )}
                    {row.errors.includes("late") && (
                      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                        <Clock className="w-3 h-3 text-red-500" />
                      </div>
                    )}
                    {row.errors.includes("user") && (
                      <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center">
                        <User className="w-3 h-3 text-amber-500" />
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-1 py-1 border border-gray-200">
                  <span
                    className={`text-xs ${
                      row.calAtt.includes("LT")
                        ? "text-red-500"
                        : row.calAtt === "HD"
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  >
                    {row.calAtt}
                  </span>
                </td>
                <td className="px-1 py-1 border border-gray-200">
                  <div className="flex flex-row items-center gap-1">
                    <span
                      className="text-[10px] font-bold"
                    >
                      {row.finalAtt}
                    </span>
                    <ChevronDown className="w-2 h-2 text-black" />
                  </div>
                  {row.overtimeNote && (
                    <span
                      className={`text-xs ${
                        row.overtimeNote.includes("09:01")
                          ? "text-amber-500"
                          : "text-red-500"
                      }`}
                    >
                      {row.overtimeNote}
                    </span>
                  )}
                </td>
                <td className="px-1 py-1 border border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      <Link className="w-4 h-4 text-black" />
                      <span className="text-xs text-black">{row.links}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-black" />
                      <span className="text-xs text-black">
                        {row.messages}
                      </span>
                    </div>
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <MoreHorizontal className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;
