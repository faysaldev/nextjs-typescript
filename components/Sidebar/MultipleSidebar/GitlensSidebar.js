import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function GitlensSidebar() {
  return (
    <div>
      {/* todo: search bar top */}
      <div className="flex items-center space-x-4">
        <p className="text-[10px] font-semibold">GITLENS:WELCOME</p>
        <CloseIcon className="h-4 text-gray-400 cursor-pointer hover:opacity-50" />
      </div>

      {/* search input */}
      <div className="space-y-3 mt-4 px-1 ">
        <h5 className="text-gray-500 text-xs text-left">
          GitLens is an open-source extension for Visual Studio Code. GitLens
          simply helps you better understand code. Quickly glimpse into whom,
        </h5>

        <div className="px-3 py-2 bg-gray-700 text-xs text-center text-white font-normal rounded">
          Welcome (Quick Setup)
        </div>

        <p className="text-gray-500 text-xs text-left">
          For more option run
          <span className="text-blue-300">Gitlens Open Settings</span>
          from the Command palette to open the interactive Gitlens settings
          editor
        </p>

        <p className="text-gray-500 text-xs text-left">
          <span className="text-blue-300">Gitlens Views</span>
          Quickly glimpse into whom, why, and when a line or code block was
        </p>

        <p className="text-gray-500 text-xs text-left">
          <span className="text-blue-300">Gitlens Set Views Layout</span>
          Quickly glimpse into whom, why, and when a line or code block was
          changed. Jump back through history to gain further insights as to how
          and why the code evolved
        </p>

        <div className="px-3 py-2 bg-gray-700 text-xs text-center text-white font-normal rounded">
          Close
        </div>
      </div>
    </div>
  );
}

export default GitlensSidebar;
