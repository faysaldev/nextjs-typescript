import React, { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FolderDropDown from "./FolderDropDown";

function Folder({ Icon, bg, text, dropdown }) {
  const [showfolder, setShowFolder] = useState(false);
  return (
    <div className="">
      {showfolder ? (
        <KeyboardArrowDownIcon className="h-4" />
      ) : (
        <KeyboardArrowRightIcon className="h-4" />
      )}

      <Icon className={`h-4 ${bg} `} />
      <span onClick={() => setShowFolder(!showfolder)} className="text-xs">
        {text}
      </span>

      {showfolder && (
        <>
          {dropdown?.map((item) => (
            <div className="pl-6 pb-2" key={item.id}>
              <FolderDropDown
                key={item.id}
                text={item.text}
                Icon={item.Icon}
                files={item.files}
                bg="text-gray-400"
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Folder;
