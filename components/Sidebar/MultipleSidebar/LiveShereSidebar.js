import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import ReplayIcon from "@mui/icons-material/Replay";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import LockClockIcon from "@mui/icons-material/LockClock";

// todo demo demo
import GitSouce from "./Git/GitSouce";
import LiveShere from "./LiveShere/LiveShere";

function LiveShereSidebar() {
  const [sourceControl, setsourceControl] = useState(true);

  return (
    <div className="cursor-pointer space-y-2">
      <div className="flex items-center space-x-6">
        <p className="text-[10px] font-semibold">LIVE SHERE</p>
        <MoreHorizIcon className="h-4 text-gray-400 cursor-pointer hover:opacity-50" />
      </div>

      {/* APP */}
      <div className="relative">
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          <div className="flex items-center justify-between space-x-4 group">
            <div onClick={() => setsourceControl(!sourceControl)}>
              {sourceControl ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}{" "}
              <span
                onClick={() => setsourceControl(!sourceControl)}
                className={`${sourceControl && "text-[9px]"}`}
              >
                SESSION DETAILS
              </span>
            </div>
            <div
              className={`items-center text-sm hidden opacity-0 ${
                sourceControl &&
                "group-hover:inline-flex group-hover:opacity-100 transition-all ease-in"
              } space-x-1`}
            >
              <LockClockIcon className="w-4 text-gray-300 hover:opacity-40" />
              <OpenInBrowserIcon className="w-4 text-gray-300 hover:opacity-40" />
            </div>
          </div>
          {/* TODO: right three icon */}
          {sourceControl && <LiveShere />}
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

export default LiveShereSidebar;
