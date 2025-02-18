import { Calendar, Power, UsersRound, Wallet } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-24 bg-[#323FDD] flex flex-col justify-between py-4">
      <div className="w-24 bg-[#323FDD] flex flex-col items-center py-6 space-y-6 justify-end">
        <div className=" text-lg  text-white w-full flex flex-col items-center">
          P
        </div>
        <div className="border-y-2 border-white border-opacity-20 w-full flex flex-col items-center">
          <img
            className="w-12 h-12 my-6 bg-white/10 rounded-3xl flex items-center justify-center text-white"
            src="../bhaskar.jpg"
          />
        </div>

        <div className="w-14 h-14 bg-white/10 p-4 rounded-xl flex items-center justify-center text-white">
          <Calendar className="w-10 h-10" />
        </div>
        <div className="w-14 h-14 hover:bg-white/10 p-4 rounded-xl flex items-center justify-center text-white">
          <UsersRound className="w-10 h-10" />{" "}
        </div>
        <div className="w-14 h-14 hover:bg-white/10 p-4 rounded-xl flex items-center justify-center text-white">
          <Wallet className="w-10 h-10" />
        </div>
      </div>

      <div className="px-2">
        <button className="w-full p-2 text-white/70 hover:text-white">
          <Power className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </div>
  );
}
