
export default function TopNav() {
return (
  <nav className="bg-[#ECECF2] border-b border-gray-300 ">
    <div className="flex items-center h-12 border-r-4 ">
      {[
        { text: "Atten. Team (Admin)" },
        { text: "Org. Details (Admin)" },
        { text: "In/Out Logs" },
        { text: "Finalize Attn." },
        { text: "Manage Employees" },
        { text: "Final Reports", active: true },
        { text: "Error Reports" },
      ].map((item, index) => (
        <button
          key={index}
          className={`px-6 border-r border-gray-300 h-full text-sm font-medium ${
            item.active
              ? " shadow-lg text-[#4318FF] bg-white font-bold"
              : "text-gray-600"
          }`}
        >
          {item.text}
        </button>
      ))}
      <div className="ml-auto px-6 text-[#4318FF] font-semibold text-sm">
        Attendance Module
      </div>
    </div>
  </nav>
);
  
}