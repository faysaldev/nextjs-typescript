import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function TabnineSidebar() {
  return (
    <div>
      {/* todo: search bar top */}
      <div className="flex items-center space-x-1">
        <p className="text-[10px] font-semibold">
          TABNINE ALL ASSISTANT : QUICK
        </p>
        <MoreHorizIcon className="h-4 text-gray-400 cursor-pointer hover:opacity-50" />
      </div>

      <div className="space-y-1 mt-4">
        <p className="text-xs text-gray-400 hover:text-gray-100 cursor-pointer">
          Mannage your team
        </p>
        <p className="text-xs text-gray-400 hover:text-gray-100 cursor-pointer">
          Confiure you IDE
        </p>
      </div>
    </div>
  );
}

export default TabnineSidebar;
