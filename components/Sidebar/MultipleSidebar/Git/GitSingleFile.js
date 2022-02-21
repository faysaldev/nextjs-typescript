import React from "react";
import Image from "next/image";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import AddIcon from "@mui/icons-material/Add";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

function GitSingleFile({ Icon, text, iconColor, image }) {
  const shortname = text.length > 10 ? text.substring(0, 10) : text;

  return (
    <div className="flex items-center pt-1 group">
      {Icon && <Icon className={`h-4 ${iconColor}`} />}
      {image && (
        <Image
          src={image}
          width={15}
          height={15}
          className="object-contain rounded"
        />
      )}
      <p className="text-yellow-100 group-hover:text-blue-400 transition-colors ease-in-out pl-1 text-[9px]">
        {shortname}
      </p>

      {/* Icons */}
      <div className="flex items-center">
        <DriveFileRenameOutlineIcon className="h-3 text-gray-400 hover:opacity-30" />
        <ChangeCircleIcon className="h-3 text-gray-400 hover:opacity-30" />
        <AddIcon className="h-3 text-gray-400 hover:opacity-30" />
      </div>
    </div>
  );
}

export default GitSingleFile;
