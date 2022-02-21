import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function DebugSidebar() {
  return (
    <div>
      {/* todo: search bar top */}
      <div className="flex items-center space-x-4 justify-between w-full">
        <p className="text-[10px] font-semibold">RUN AND DEBUG: RUN</p>
        <MoreVertIcon className="h-4 text-gray-400 cursor-pointer hover:opacity-50" />
      </div>

      {/* search input */}
      <div className="space-y-3 mt-4 px-1 ">
        <div className="px-3 py-2 bg-gray-700 text-xs text-center text-white font-normal rounded">
          Run and Debug
        </div>

        <p className="text-gray-500 text-xs text-left">
          To continue Run and Debug{" "}
          <span className="text-blue-300">Create a launch.json file.</span>
        </p>
        <p className="text-blue-300 text-xs text-left">
          {" "}
          <span>Show all automatic debug configurations</span>
        </p>
        <div className="px-3 py-2 bg-gray-700 text-xs text-center text-white font-normal rounded">
          Javascript Debug Terminal
        </div>

        <h5 className="text-gray-500 text-xs text-left">
          You can use the Javascript Debug. Terminal in debug Node.js processes
          run on the command line
        </h5>

        <div className="px-3 py-2 bg-gray-700 text-xs text-center text-white font-normal rounded">
          Debug URL
        </div>
      </div>
    </div>
  );
}

export default DebugSidebar;
