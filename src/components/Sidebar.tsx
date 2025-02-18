import { Calendar, Power, UsersRound, Wallet } from "lucide-react";
import image2 from "../../bhaskar.jpg";

export default function Sidebar() {
  return (
    <div className="w-16 lg:w-24 lg:h-full bg-[#323FDD] flex flex-col justify-between py-4">
      {/* Top Section */}
      <div className="flex flex-col items-center space-y-6">
        {/* Logo or Initial */}
        <div className="text-lg text-white">P</div>

        {/* Divider and Profile Image */}
        <div className="border-y-2 border-white border-opacity-20 w-full flex flex-col items-center">
          <img
            className="w-8 h-8 lg:w-12 lg:h-12 my-4 lg:my-6 bg-white/10 rounded-3xl"
            src={image2}
            alt="Employee"
          />
        </div>

        {/* Icons */}
        <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white/10 p-2 lg:p-4 rounded-xl flex items-center justify-center text-white">
          <Calendar className="w-6 h-6 lg:w-10 lg:h-10" />
        </div>
        <div className="w-10 h-10 lg:w-14 lg:h-14 hover:bg-white/10 p-2 lg:p-4 rounded-xl flex items-center justify-center text-white">
          <UsersRound className="w-6 h-6 lg:w-10 lg:h-10" />
        </div>
        <div className="w-10 h-10 lg:w-14 lg:h-14 hover:bg-white/10 p-2 lg:p-4 rounded-xl flex items-center justify-center text-white">
          <Wallet className="w-6 h-6 lg:w-10 lg:h-10" />
        </div>
      </div>

      {/* Bottom Section (Logout Button) */}
      <div className="px-2">
        <button className="w-full p-2 text-white/70 hover:text-white">
          <Power className="w-5 h-5 lg:w-6 lg:h-6 mx-auto" />
        </button>
      </div>
    </div>
  );
}