import React, { useState } from "react";
import GitSouce from "./Git/GitSouce";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import ReplayIcon from "@mui/icons-material/Replay";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function GitSidebar() {
  const [sourceControl, setsourceControl] = useState(true);

  return (
    <div className="cursor-pointer space-y-2">
      {/* APP */}
      <div className="relative">
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          <div className="flex items-center space-x-4 group">
            <div onClick={() => setsourceControl(!sourceControl)}>
              {sourceControl ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}{" "}
              <span
                onClick={() => setsourceControl(!sourceControl)}
                className={`${sourceControl && "hidden"}`}
              >
                SOURCE CONTROL
              </span>
            </div>
            <div
              className={`items-center text-sm hidden opacity-0 ${
                sourceControl &&
                "group-hover:inline-flex group-hover:opacity-100 transition-all ease-in"
              } space-x-1`}
            >
              <DeleteSweepIcon className="w-4 text-gray-300 hover:opacity-40" />
              <DoneIcon className="w-4 text-gray-300 hover:opacity-40" />
              <ReplayIcon className="w-4 text-gray-300 hover:opacity-40" />
              <MoreHorizIcon className="w-4 text-gray-300 hover:opacity-40" />
            </div>
          </div>
          {/* TODO: right three icon */}
          {sourceControl && <GitSouce />}
        </p>
        {/* this is the the file */}
      </div>
      {/* outline */}

      <div>
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          {/* wrapper div */}
          <div className="flex items-center space-x-4 group">
            <div>
              <KeyboardArrowRightIcon />
              <span>COMMITS</span>{" "}
            </div>
          </div>
        </p>
      </div>
      {/* Timeline */}
      <div>
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          {/* wrapper div */}
          <div className="flex items-center space-x-4 group">
            <div>
              <KeyboardArrowRightIcon />
              <span>FILE HISTORY</span>{" "}
            </div>
          </div>
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          {/* wrapper div */}
          <div className="flex items-center space-x-4 group">
            <div>
              <KeyboardArrowRightIcon />
              <span>BRANCHES</span>{" "}
            </div>
          </div>
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          {/* wrapper div */}
          <div className="flex items-center space-x-4 group">
            <div>
              <KeyboardArrowRightIcon />
              <span>REMOTE</span>{" "}
            </div>
          </div>
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          {/* wrapper div */}
          <div className="flex items-center space-x-4 group">
            <div>
              <KeyboardArrowRightIcon />
              <span>SEARCH & COMPARE</span>{" "}
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default GitSidebar;
