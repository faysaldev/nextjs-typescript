import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

function Outline() {
  return (
    <div className="pl-6 space-y-1">
      <div className="flex items-center group">
        <RepeatIcon className="h-4 text-yellow-400" />
        <p className="text-gray-500 group-hover:text-blue-300">Outline</p>
      </div>

      <div className="flex items-center pb-2 group">
        <SyncAltIcon className="h-4 text-orange-400" />
        <p className="text-gray-500 group-hover:text-blue-300">default</p>
      </div>
    </div>
  );
}

export default Outline;
