import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileFolder from "./FileSIdeBar/FileFolder";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ReplayIcon from "@mui/icons-material/Replay";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PushPinIcon from "@mui/icons-material/PushPin";
import Timeline from "./Timeline/Timeline";
import Outline from "./Outline/Outline";

function FileSidebar() {
  const [app, setApp] = useState(true);
  const [outline, setOutline] = useState(false);
  const [timeline, setTimeline] = useState(false);

  return (
    <div className="cursor-pointer space-y-2">
      {/* APP */}
      <div className="relative">
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          <div className="flex items-center space-x-4 group">
            <div>
              {app ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}{" "}
              <span onClick={() => setApp(!app)}>APP</span>
            </div>
            <div
              className={`items-center text-sm hidden opacity-0 ${
                app &&
                "group-hover:inline-flex group-hover:opacity-100 transition-all ease-in"
              } space-x-1`}
            >
              <FileOpenIcon className="w-4 text-gray-300 hover:opacity-40" />
              <CreateNewFolderIcon className="w-4 text-gray-300 hover:opacity-40" />
              <ReplayIcon className="w-4 text-gray-300 hover:opacity-40" />
              <AddToPhotosIcon className="w-4 text-gray-300 hover:opacity-40" />
            </div>
          </div>
          {/* TODO: right three icon */}
          {app && <FileFolder />}
        </p>
        {/* this is the the file */}
      </div>
      {/* outline */}

      <div>
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          {/* wrapper div */}
          <div className="flex items-center space-x-4 group">
            <div>
              {outline ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}{" "}
              <span onClick={() => setOutline(!outline)}>OUTLINE</span>{" "}
            </div>
            {/* Icons div */}
            <div
              className={`items-center text-sm hidden opacity-0 ${
                outline &&
                "group-hover:inline-flex group-hover:opacity-100 transition-all ease-in"
              } space-x-1`}
            >
              <AddToPhotosIcon className="w-4 text-gray-300 hover:opacity-40" />
              <MoreHorizIcon className="w-4 text-gray-300 hover:opacity-40" />
            </div>
          </div>

          {outline && <Outline />}
        </p>
      </div>
      {/* Timeline */}
      <div>
        <p className="text-xs font-semibold transition-all ease-in-out duration-700">
          {/* wrapper */}
          <div className="flex items-center space-x-4 group">
            <div>
              {timeline ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}{" "}
              <span onClick={() => setTimeline(!timeline)}>TIMELINE</span>{" "}
            </div>
            {/* Icons */}
            <div
              className={`items-center text-sm hidden opacity-0 ${
                timeline &&
                "group-hover:inline-flex group-hover:opacity-100 transition-all ease-in"
              } space-x-1`}
            >
              <PushPinIcon className="w-4 text-gray-300 hover:opacity-40" />
              <ReplayIcon className="w-4 text-gray-300 hover:opacity-40" />
              <MoreHorizIcon className="w-4 text-gray-300 hover:opacity-40" />
            </div>
          </div>

          {timeline && <Timeline />}
        </p>
      </div>
    </div>
  );
}

export default FileSidebar;
