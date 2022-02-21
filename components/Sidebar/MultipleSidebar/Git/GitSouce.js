import React, { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import AddIcon from "@mui/icons-material/Add";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import GitSingleFile from "./GitSingleFile";

function GitSouce() {
  const [change, setChanges] = useState(true);

  const GitChanges = [
    {
      id: 1,
      Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
      name: "Feed.js",
    },
    {
      id: 2,
      Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
      name: "FeedTopNav.js",
    },
    {
      id: 3,
      Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
      name: "TopNavSingle.js",
    },
    {
      id: 4,
      Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
      name: "GitSingleFile.js",
    },
    {
      id: 5,
      Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
      name: "LivrShere.js",
    },
    {
      id: 6,
      Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
      name: "TopRight.js",
    },

    {
      id: 7,
      Icon: "https://i.ibb.co/095jJR2/download-2-removebg-preview.png",
      name: "globals.css",
    },
  ];

  return (
    <div className="pl-2">
      {/* searh bar */}
      <div className="flex items-center w-full bg-gray mt-4 border px-1 py-1 rounded border-gray-500 pl-1 bg-gray-900">
        <input
          type="text"
          placeholder="Mannage (Ctrl+Enter to c....)"
          className="bg-transparent text-xs placeholder:text-xs border-none w-full outline-none"
        />
      </div>

      {/* files */}
      <div>
        {/* all Changes file */}
        <div className="relative">
          <p className="text-xs font-semibold transition-all ease-in-out duration-700">
            <div className="flex items-center space-x-4 group">
              <div onClick={() => setChanges(!change)}>
                {change ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )}{" "}
                <span
                  onClick={() => setChanges(!change)}
                  className={`text-xs ${change && "hidden"}`}
                >
                  Changes
                </span>
              </div>
              <div
                className={`items-center text-sm hidden opacity-0 ${
                  change &&
                  "group-hover:inline-flex group-hover:opacity-100 transition-all ease-in"
                } space-x-1`}
              >
                <DriveFileRenameOutlineIcon className="h-4 text-gray-400 hover:opacity-30" />
                <ChangeCircleIcon className="h-4 text-gray-400 hover:opacity-30" />
                <AddIcon className="h-4 text-gray-400 hover:opacity-30" />
              </div>
            </div>
            {/* TODO: right three icon */}
            {change && (
              <div className="pl-3">
                {GitChanges?.map((item) => (
                  <GitSingleFile
                    key={item.id}
                    image={item.Icon}
                    text={item.name}
                  />
                ))}
              </div>
            )}
          </p>
          {/* this is the the file */}
        </div>
      </div>
    </div>
  );
}

export default GitSouce;
