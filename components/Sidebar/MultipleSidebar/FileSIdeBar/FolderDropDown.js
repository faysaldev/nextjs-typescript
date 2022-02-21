import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import File from "./File";

function FolderDropDown({ text, Icon, bg, dropdown, files }) {
  const [nastedFolder, setNastedFolderShow] = useState(false);
  return (
    <div className="">
      <div className="flex items-center">
        {nastedFolder ? (
          <KeyboardArrowDownIcon className="h-4" />
        ) : (
          <KeyboardArrowRightIcon className="h-4" />
        )}

        <Icon className={`h-4 ${bg} `} />
        <span
          onClick={() => setNastedFolderShow(!nastedFolder)}
          className="text-xs"
        >
          {text}
        </span>
      </div>

      {nastedFolder && (
        <div className="pl-6">
          {files?.map((file) => (
            <File
              key={file.id}
              iconColor="text-yellow-500"
              image={file.Icon}
              text={file.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FolderDropDown;
