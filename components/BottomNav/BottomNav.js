import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import CancelIcon from "@mui/icons-material/Cancel";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import WatchIcon from "@mui/icons-material/Watch";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import EjectIcon from "@mui/icons-material/Eject";
import DoneIcon from "@mui/icons-material/Done";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import CodeIcon from "@mui/icons-material/Code";

function BottomNav() {
  return (
    <div className="bg-[#24292E] absolute bottom-0 left-0 w-full px-3 py-1 flex items-center justify-between">
      {/* left */}
      <div className="flex items-center">
        {/* single */}
        <div className="flex items-center px-2 space-x-1 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer hover:text-white group">
          <GitHubIcon className="text-gray-600 group-hover:text-white h-4" />
          <p className="text-xs font-normal">main</p>
        </div>

        {/* another  */}
        <div className="flex items-center px-2 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer text-white group">
          <ReplyAllIcon className="text-gray-600 h-4 group-hover:text-white" />
        </div>

        {/* another one */}
        <div className="flex items-center px-2 space-x-1 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer text-white group hover:text-white">
          <CancelIcon className="text-gray-600 group-hover:text-white h-4" />
          <p className="text-xs font-normal">0</p>
          <ReportGmailerrorredIcon className="text-gray-600 h-4 group-hover:text-white" />
          <p className="text-xs font-normal">3</p>
        </div>

        <div className="flex items-center px-2 space-x-1 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer text-white group">
          <ReplyAllIcon className="text-gray-600 h-4 group-hover:text-white" />
          <p className="text-xs font-normal">Live Share</p>
        </div>

        <div className="flex items-center px-2 space-x-1 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer hover:text-white group">
          <ModeStandbyIcon className="text-gray-600 group-hover:text-white h-4" />
          <p className="text-xs font-normal">tabnine</p>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center text-xs">
        <div className="flex items-center px-2 space-x-1 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer hover:text-white group">
          <p className="text-xs font-semibold">CRLF</p>
        </div>

        <div className="flex items-center px-2 space-x-1 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer hover:text-white group">
          <CodeIcon className="text-white group-hover:text-white h-4" />

          <p className="text-xs font-semibold">JavaScript</p>
        </div>

        <div className="flex items-center px-2 space-x-1 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer hover:text-white group">
          <EjectIcon className="text-white group-hover:text-white h-4" />
          <p className="text-xs font-semibold">With Next.js</p>
        </div>

        <div className="flex items-center px-2 space-x-1 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer hover:text-white group">
          <DoneIcon className="text-white group-hover:text-white h-4" />
          <p className="text-xs font-semibold">Prettier</p>
        </div>

        <div className="flex items-center px-2 space-x-1 py-1 hover:opacity-70 hover:bg-gray-600 cursor-pointer hover:text-white group">
          <EditNotificationsIcon className="text-white group-hover:text-white h-4" />
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
