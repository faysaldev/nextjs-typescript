import React, { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FolderDropDown from "./FolderDropDown";
import File from "./File";

function Folder({ Icon, bg, text, dropdown, page }) {
  const [showfolder, setShowFolder] = useState(false);
  const [pageShow, setPageShow] = useState(true);
  return (
    <div>
      {page ? (
        <>
          {showfolder ? (
            <KeyboardArrowDownIcon className="h-4" />
          ) : (
            <KeyboardArrowRightIcon className="h-4" />
          )}

          <Icon className={`h-4 ${bg} `} />
          <span onClick={() => setPageShow(!pageShow)} className="text-xs">
            {text}
          </span>

          {pageShow && (
            <div className="pl-6">
              {dropdown?.map((file) => (
                <File
                  key={file.id}
                  iconColor="text-yellow-500"
                  image={file.Icon}
                  text={file.name}
                  page
                  allFuilds={file}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {showfolder ? (
            <KeyboardArrowDownIcon className="h-4" />
          ) : (
            <KeyboardArrowRightIcon className="h-4" />
          )}

          <Icon className={`h-4 ${bg} `} />
          <span onClick={() => setShowFolder(!showfolder)} className="text-xs">
            {text}
          </span>

          {showfolder && (
            <>
              {dropdown?.map((item) => (
                <div className="pl-6 pb-2" key={item.id}>
                  <FolderDropDown
                    key={item.id}
                    text={item.text}
                    Icon={item.Icon}
                    files={item.files}
                    bg="text-gray-400"
                  />
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Folder;
