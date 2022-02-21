import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ReplayIcon from "@mui/icons-material/Replay";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import INstallExTren from "./Extrenstions/INstallExTren";
import Recomanded from "./Extrenstions/Recomanded";

function ExtrensionSidebar() {
  const [install, setInstall] = useState(true);
  const [recomanded, setrecomanded] = useState(false);

  const [search, setSearch] = useState("");

  return (
    <div className="cursor-pointer">
      {/* todo: search bar top */}
      <div className="flex items-center space-x-4 justify-between w-full">
        <div className="flex items-center">
          <p className="text-[13px] font-semibold pr-3">Extension</p>
          <FilterAltIcon className="h-4 text-gray-400 cursor-pointer hover:opacity-50" />
          <ReplayIcon className="h-4 text-gray-400 cursor-pointer hover:opacity-50" />
        </div>
        <MoreHorizIcon className="h-4 text-gray-400 cursor-pointer hover:opacity-50" />
      </div>

      {/* TODO: */}

      {/* fiirst input */}
      <div className="flex items-center w-full bg-gray mt-4 border px-1 py-1 rounded border-gray-500 pl-1 bg-gray-900">
        <input
          type="text"
          placeholder="Search Extrenstions in Mar.."
          className="bg-transparent text-xs placeholder:text-xs border-none w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-4 space-y-2">
        <div className="relative">
          <p className="text-xs font-semibold transition-all ease-in-out duration-700">
            <div className="flex items-center space-x-4 group">
              <div onClick={() => setInstall(!install)}>
                {install ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )}{" "}
                <span onClick={() => setInstall(!install)}>INSTALLED</span>
              </div>
              <p className="text-[9px] p-1 w-6 h-6 rounded-full bg-gray-700 text-center font-semibold transition-all ease-in-out duration-700">
                23
              </p>
            </div>
            {/* TODO: right three icon */}
            {install && <INstallExTren search={search} setSearch={setSearch} />}
          </p>
          {/* this is the the file */}
        </div>

        {/* Recommmadnded */}
        <div className="relative">
          <p className="text-xs font-semibold transition-all ease-in-out duration-700">
            <div className="flex items-center space-x-4 group">
              <div onClick={() => setrecomanded(!recomanded)}>
                {recomanded ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )}{" "}
                <span
                  className="text-"
                  onClick={() => setrecomanded(!recomanded)}
                >
                  RECOMEND
                </span>
              </div>
              <p className="text-[9px] p-1 w-6 h-6 rounded-full bg-gray-700 text-center font-semibold transition-all ease-in-out duration-700">
                3
              </p>
            </div>
            {/* TODO: right three icon */}
            {recomanded && <Recomanded />}
          </p>
          {/* this is the the file */}
        </div>
      </div>
    </div>
  );
}

export default ExtrensionSidebar;
