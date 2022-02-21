import React from "react";
import BentoIcon from "@mui/icons-material/Bento";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CloseIcon from "@mui/icons-material/Close";

function TopRight() {
  return (
    <div className="flex items-center space-x-3">
      <BentoIcon className="text-gray-300 px-1 hover:opacity-30 transition hover:text-white" />
      <div className="mb-4">
        <MinimizeIcon className=" hover:opacity-30 transition hover:text-white" />
      </div>
      <CheckBoxOutlineBlankIcon className="text-gray-300 px-1 hover:opacity-30 transition hover:text-white" />
      <CloseIcon className="text-gray-300 px-1 hover:opacity-30 transition hover:text-white" />
    </div>
  );
}

export default TopRight;
