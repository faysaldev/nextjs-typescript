import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AirIcon from "@mui/icons-material/Air";
import PrintIcon from "@mui/icons-material/Print";

function SearchSidebar() {
  return (
    <div>
      {/* todo: search bar top */}
      <div className="flex items-center space-x-4">
        <p className="text-[10px] font-semibold">SEARCH</p>
        <FileCopyIcon className="h-4 text-gray-400 cursor-pointer hover:opacity-50" />
      </div>

      {/* search input */}
      <div className="space-y-1">
        {/* fiirst input */}
        <div className="flex items-center w-full bg-gray mt-4 border px-1 py-1 rounded border-gray-500 pl-1 bg-gray-900">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-xs placeholder:text-xs border-none w-[70px] outline-none"
          />
          <span className="p-1 text-xs hover:opacity-25">Aa</span>
          <span className="p-1 text-xs hover:opacity-25">ab</span>
          <AirIcon className="h-4" />
        </div>

        {/* second one */}
        <div className="flex items-center space-x-1 w-full">
          <div className="flex-grouw items-center w-full bg-gray border px-1 py-1 rounded border-gray-500 pl-1 bg-gray-900">
            <input
              type="text"
              placeholder="Replace"
              className="bg-transparent text-xs placeholder:text-xs border-none w-[70px] outline-none"
            />
            <span className="text-xs hover:opacity-25">Aa</span>
          </div>
          <PrintIcon className="h-4 text-gray-400 hover:opacity-30" />
        </div>
      </div>
    </div>
  );
}

export default SearchSidebar;
