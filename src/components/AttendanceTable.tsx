import React, { useState } from "react";
import { MoreHorizontal, AlertCircle, Clock, ChevronDown, Menu } from "lucide-react";
import { format } from "date-fns";
import image from "../../bhaskar.jpg";

export function AttendanceTable() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false); // State to manage summary visibility on small screens
  const [isTableOpen, setIsTableOpen] = useState(false); // State to manage table visibility on small screens

  const employee = {
    name: "Bhaskar Sharma",
    role: "Sales Manager",
    department: "Sales Dept.",
    avatar: image,
  };

  const summaryData = {
    calculated: {
      P: "17.5",
      A: "2.5",
      WO: "11",
      bonus: "+2000",
      OT: "17:32 H",
      LT: "-12:00 H",
      OTLT: "05:32 H",
      finalAtt: "20",
    },
    final: {
      P: "23.5",
      A: "3.5",
      WO: "4",
      bonus: "+400",
      OT: "12:30 H",
      LT: "-19:00",
      OTLT: "-06:30 H",
      finalAtt: "27",
    },
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        {/* Employee Header */}
        <div className="border-b px-4 lg:px-6 py-4">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={employee.avatar}
              alt={employee.name}
              className="w-10 h-10 rounded-full ring-2 ring-white"
            />
            <div>
              <h3 className="font-medium text-gray-900">{employee.name}</h3>
              <p className="text-sm text-gray-500">
                {employee.role} · {employee.department}
              </p>
            </div>
          </div>

          {/* Summary Toggle Button for Small Screens */}
          <button
            onClick={() => setIsSummaryOpen(!isSummaryOpen)}
            className="lg:hidden w-full p-2 flex items-center justify-between bg-gray-50 rounded-lg mb-4"
          >
            <span className="font-medium text-gray-900">Summary</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isSummaryOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Summary Grid */}
          <div
            className={`${
              isSummaryOpen ? "block" : "hidden"
            } lg:block grid grid-cols-9 gap-6 text-sm`}
          >
            <div className="font-medium text-gray-900">Cal.</div>
            <div className="text-gray-900">{summaryData.calculated.P}</div>
            <div className="text-gray-900">{summaryData.calculated.A}</div>
            <div className="text-gray-900">{summaryData.calculated.WO}</div>
            <div className="text-status-green font-medium">
              {summaryData.calculated.bonus}
            </div>
            <div className="text-gray-900">{summaryData.calculated.OT}</div>
            <div className="text-gray-900">{summaryData.calculated.LT}</div>
            <div className="text-gray-900">{summaryData.calculated.OTLT}</div>
            <div className="text-gray-900">
              {summaryData.calculated.finalAtt}
            </div>

            <div className="font-medium text-gray-900">Final</div>
            <div className="text-gray-900">{summaryData.final.P}</div>
            <div className="text-gray-900">{summaryData.final.A}</div>
            <div className="text-gray-900">{summaryData.final.WO}</div>
            <div className="text-status-green font-medium">
              {summaryData.final.bonus}
            </div>
            <div className="text-gray-900">{summaryData.final.OT}</div>
            <div className="text-gray-900">{summaryData.final.LT}</div>
            <div className="text-gray-900">{summaryData.final.OTLT}</div>
            <div className="text-gray-900">{summaryData.final.finalAtt}</div>
          </div>
        </div>

        {/* Table Toggle Button for Small Screens */}
        <button
          onClick={() => setIsTableOpen(!isTableOpen)}
          className="lg:hidden w-full p-2 flex items-center justify-between bg-gray-50 rounded-lg mb-4"
        >
          <span className="font-medium text-gray-900">Attendance Details</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isTableOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Table */}
        <div className={`${isTableOpen ? "block" : "hidden"} lg:block`}>
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 px-4 lg:px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500">
            <div>Date</div>
            <div>Time planned + WH</div>
            <div>Actual Time</div>
            <div>Fine/Bonus</div>
            <div>Error</div>
            <div>Cal. Att.</div>
            <div>Final Att.</div>
          </div>

          {/* Table Body */}
          {Array.from({ length: 31 }, (_, i) => i + 1)
            .reverse()
            .map((day) => (
              <div
                key={day}
                className="grid grid-cols-7 gap-4 px-4 lg:px-6 py-3 border-t text-sm hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-center space-x-2 text-gray-900">
                  <span className="w-8 font-medium">
                    {format(new Date(2025, 5, day), "EEE")}
                  </span>
                  <span>{format(new Date(2025, 5, day), "d-MMM-yyyy")}</span>
                </div>
                <div className="text-gray-500">
                  <span className="inline-flex items-center">
                    09:00 AM - 06:30 PM
                    <span className="text-gray-400 mx-1">+</span>
                    09:00 H
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-status-red">
                  <span>
                    09:01 AM - 05:32 PM
                    <span className="text-gray-400 mx-1">+</span>
                    08:01 H
                  </span>
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-status-green font-medium">+500</div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-status-red" />
                  <Clock className="h-4 w-4 text-status-yellow" />
                </div>
                <div className="text-gray-900">P + WO - LT</div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">P + WO - LT</span>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreHorizontal className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}