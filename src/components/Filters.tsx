import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";

export default function Filters() {
  return (
    <div className="bg-[#E3E5FB] px-4 py-3 border-b flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 py-1 border placeholder:font-medium placeholder:text-gray-500 placeholder:text-xs border-gray-300 rounded-3xl text-sm w-48"
          />
        </div>

        <button className="px-4 py-2 text-gray-700 rounded-lg text-xs flex items-center space-x-2">
          <SlidersHorizontal className="h-3 w-3" />
          <span>Filters </span>
        </button>
        {["Rows", "July"].map((label) => (
          <button
            key={label}
            className="px-4 py-2 border font-semibold  border-gray-300 rounded-2xl bg-white text-xs flex items-center"
          >
            <span>{label}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <button className="px-4 py-2 bg-[#4318FF] text-white rounded-3xl text-xs flex items-center space-x-2">
          <span>Export</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <button className="px-4 py-2 border-gray-300 border  rounded-3xl bg-white text-xs font-bold  flex items-center space-x-2">
          <span>Detailed View</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
