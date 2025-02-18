import { useState } from "react";
import { Menu } from "lucide-react"; // Import a menu icon for the dropdown

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage dropdown visibility

  const navItems = [
    { text: "Atten. Team (Admin)" },
    { text: "Org. Details (Admin)" },
    { text: "In/Out Logs" },
    { text: "Finalize Attn." },
    { text: "Manage Employees" },
    { text: "Final Reports", active: true },
    { text: "Error Reports" },
  ];

  return (
    <nav className="bg-[#ECECF2] border-b border-gray-300">
      <div className="flex items-center h-12">
        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden px-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items (Hidden on Small Screens) */}
        <div className="hidden lg:flex">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`px-6 border-r border-gray-300 h-full text-sm font-medium ${
                item.active
                  ? "shadow-lg text-[#4318FF] bg-white font-bold"
                  : "text-gray-600"
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>

        {/* Attendance Module Text */}
        <div className="ml-auto px-6 text-[#4318FF] font-semibold text-sm">
          Attendance Module
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`block w-full px-6 py-2 text-sm font-medium text-left ${
                item.active
                  ? "text-[#4318FF] bg-gray-100 font-bold"
                  : "text-gray-600"
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}