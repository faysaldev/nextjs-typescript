import React, { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import AddIcon from "@mui/icons-material/Add";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import GitSingleFile from "./GitSingleFile";

function LiveShere() {
  const [change, setChanges] = useState(true);

  return (
    <div className="pl-2">
      {/* files */}
      <div className="space-y-3 mt-4 px-1 ">
        <p className="text-gray-500 text-xs text-left">
          Start collaboarticly editting and debugging sith others in realtime
        </p>

        <div className="px-3 py-2 bg-gray-700 text-xs text-center text-white font-normal rounded">
          Shere
        </div>

        <p className="text-gray-500 text-xs text-left">
          You can also
          <span className="text-blue-300"> shere with read-only </span>
          permission and joind others seession
        </p>
        <div className="px-3 py-2 bg-gray-700 text-xs text-center text-white font-normal rounded">
          Join
        </div>

        <p className="text-gray-500 text-xs text-left">
          To Learn more about live shere
          <span className="text-blue-300"> read our docs</span>
        </p>
      </div>
    </div>
  );
}

export default LiveShere;
