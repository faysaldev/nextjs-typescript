import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import Folder from "./Folder";
import SnippetFolderIcon from "@mui/icons-material/SnippetFolder";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import FolderSharedIcon from "@mui/icons-material/FolderShared";

// todo for file
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import File from "./File";

function FileFolder() {
  const componentsDropdown = [
    {
      id: 1,
      Icon: FolderIcon,
      text: "Feed",
      files: [
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
      ],
    },
    {
      id: 2,
      Icon: FolderIcon,
      text: "Sidebar",
      files: [
        {
          id: 1,
          Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
          name: "Sidebar.js",
        },
        {
          id: 2,
          Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
          name: "SmallSidebar.js",
        },
        {
          id: 3,
          Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
          name: "hey.js",
        },
      ],
    },
    {
      id: 2,
      Icon: FolderIcon,
      text: "TopNav",
      files: [
        {
          id: 1,
          Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
          name: "TopNav.js",
        },
        {
          id: 2,
          Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
          name: "TopRight.js",
        },
        {
          id: 2,
          Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
          name: "TopSingleItem.js",
        },
      ],
    },
  ];

  return (
    <div className="pl-3 space-y-1">
      <Folder Icon={FolderIcon} text="next" bg="text-green-300" />
      <Folder
        Icon={SnippetFolderIcon}
        text="components"
        bg="text-pink-300"
        dropdown={componentsDropdown}
      />
      <Folder Icon={FolderZipIcon} text="node_modules" bg="text-green-600" />
      <Folder Icon={FolderSpecialIcon} text="pages" bg="text-red-400" />
      <Folder Icon={FolderSharedIcon} text="public" bg="text-blue-400" />
      <Folder Icon={FolderDeleteIcon} text="styles" bg="text-red-300" />
      {/* FIXME: All the filex */}
      <File
        Icon={EditLocationAltIcon}
        text=".babelrc"
        iconColor="text-yellow-400"
      />
      <File
        Icon={SportsBasketballIcon}
        text=".eslintrc.json"
        iconColor="text-indigo-400"
      />
      <File Icon={CallSplitIcon} text=".gitgnore" iconColor="text-red-400" />
      <File
        Icon={InsertDriveFileIcon}
        text="next.config.js"
        iconColor="text-gray-300"
      />
      <File
        Icon={InsertDriveFileIcon}
        text="package.lock.json"
        iconColor="text-green-300"
      />
      <File
        Icon={InsertDriveFileIcon}
        text="package.json"
        iconColor="text-green-300"
      />
      <File
        Icon={InsertDriveFileIcon}
        text="postcss.config.js"
        iconColor="text-amber-300"
      />
      <File Icon={FmdBadIcon} text="README.md" iconColor="text-blue-300" />
      <File
        Icon={InsertDriveFileIcon}
        text="tailwind.config.js"
        iconColor="text-blue-400"
      />
    </div>
  );
}

export default FileFolder;
