import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AvTimerIcon from "@mui/icons-material/AvTimer";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ExtrenstionSingle({ name, details, creator, recomanded }) {
  const shorDescription =
    details.length > 20 ? details.substring(0, 20) + "..." : details;
  return (
    <div className="group space-y-1 cursor-pointer">
      {/* top */}
      <div className="flex items-center justify-between text-gray-400 group-hover:text-white transition-all ease-in-out">
        <h1>{name}</h1>
        <div className="flex items-center">
          <AvTimerIcon className="h-4" />
          <span className="text-[9px]">9ms</span>
        </div>
      </div>
      <p className="text-gray-600 group-hover:text-white transition-all ease-in-out">
        {shorDescription}
      </p>
      {/* bottom */}
      <div className="flex items-center justify-between text-gray-300">
        <p>{creator}</p>
        {recomanded ? (
          <div className="flex items-center px-1 text-gray-200 py-1 bg-green-600 rounded">
            <p>Install</p>
            <KeyboardArrowDownIcon className="h-4" />
          </div>
        ) : (
          <SettingsIcon className="h-4" />
        )}
      </div>
    </div>
  );
}

export default ExtrenstionSingle;
