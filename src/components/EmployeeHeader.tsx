import React from "react";

const EmployeeHeader = () => {
  return (
    <div className="bg-white rounded-xl mb-2 shadow-md">
      <div className="flex items-start">
        {/* Employee Info */}
        <div className="flex mt-4 items-center justify-center flex-row space-x-3 p-4 ">
          <img
            src="/../../bhaskar.jpg"
            alt="Employee"
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <div className="min-w-xl">
            <div className="text-sm font-bold text-gray-900">
              Bhaskar Sharma
            </div>
            <div className="text-[10px] text-gray-500">
            <span className="border-r pr-1 border-gray-300 mr-1 "> Sales manager</span>Sales Dept.
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 border-2 border-gray-200 rounded ml-12 mr-2 my-2 overflow-hidden">
          <table className="w-full text-sm font-bold border-collapse">
            <thead>
              <tr className="">
                <th className="text-left  px-3 py-2 text-xs  border-b"></th>
                <th className="text-center  px-2 py-2 text-xs font-bold  border-b border-l">
                  P
                </th>
                <th className="text-center  px-2 py-2 text-xs font-bold  border-b border-l">
                  A
                </th>
                <th className="text-center  px-2 py-2 text-xs font-bold  border-b border-l">
                  WO
                </th>
                <th className="text-center  px-2 py-2 text-xs font-bold  border-b border-l">
                  Σ Bonus/Fine
                </th>
                <th className="text-center  px-2 py-2 text-xs font-bold  border-b border-l">
                  OT
                </th>
                <th className="text-center  px-2 py-2 text-xs font-bold  border-b border-l">
                  LT
                </th>
                <th className="text-center  px-2 py-2 text-xs font-bold  border-b border-l">
                  OT+LT
                </th>
                <th className="text-center  px-2 py-2 text-xs font-bold  border-b border-l">
                  Final Att.
                </th>
                <th className="text-center  px-2 py-2 text-xs font-bold  border-b border-l">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 text-xs font-bold border-b ">
                  Cal.
                </td>
                <td className="px-2 py-2 text-xs font-bold border-b border-l text-center">
                  17.5
                </td>
                <td className="px-2 py-2 text-xs font-bold border-b border-l text-center">
                  2.5
                </td>
                <td className="px-2 py-2 text-xs font-bold border-b border-l text-center">
                  11
                </td>
                <td className="px-2 py-2 text-xs font-bold border-b border-l text-center">
                  +2000
                </td>
                <td className="px-2 py-2 text-xs font-bold border-b border-l text-center">
                  17:32 H
                </td>
                <td className="px-2 py-2 text-xs font-bold border-b border-l text-center">
                  -12:00 H
                </td>
                <td className="px-2 py-2 text-xs font-bold border-b border-l text-center">
                  05:32 H
                </td>
                <td className="px-2 py-2 text-xs font-bold border-b border-l text-center">
                  20
                </td>
                <td className="px-2 py-2 text-xs font-bold border-b border-l text-center">
                  Finalised by Rahul
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-xs font-bold">
                  Final
                </td>
                <td className="px-2 py-2 text-xs font-bold border-l text-center">
                  23.5
                </td>
                <td className="px-2 py-2 text-xs font-bold border-l text-center">
                  3.5
                </td>
                <td className="px-2 py-2 text-xs font-bold border-l text-center">
                  4
                </td>
                <td className="px-2 py-2 text-xs font-bold border-l text-center">
                  +400
                </td>
                <td className="px-2 py-2 text-xs font-bold border-l text-center">
                  12:30 H
                </td>
                <td className="px-2 py-2 text-xs font-bold border-l text-center">
                  -19:00
                </td>
                <td className="px-2 py-2 text-xs font-medium border-l text-center text-red-600">
                  -06:30 H
                </td>
                <td className="px-2 py-2 text-xs font-bold border-l text-center">
                  27
                </td>
                <td className="px-2 py-2 text-xs font-bold border-l text-center">
                  Locked by Shriniwas
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHeader;
