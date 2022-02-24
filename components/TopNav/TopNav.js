import React from "react";
import TopRight from "./TopRight";
import TopSingleItem from "./TopSingleItem";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { setlectCurrentFile } from "../../slice/appSlice";
import { useSelector } from "react-redux";
function TopNav() {
  const currentTab = useSelector(setlectCurrentFile);

  const FIleDropDown = [
    {
      id: 1,
      dropname: "New File",
      shorcut: "Ctrl + N",
    },
    {
      id: 2,
      dropname: "New Window",
      shorcut: "Ctrl + Shift + N",
    },
    {
      id: 3,
      dropname: "Open File",
      shorcut: "Ctrl + 0",
    },
    {
      id: 4,
      dropname: "New File",
      shorcut: "Ctrl + N",
    },
  ];

  const TopManu = [
    { id: 1, name: "File" },
    { id: 2, name: "Edit" },
    { id: 3, name: "Selection" },
    { id: 4, name: "View" },
    { id: 5, name: "Go" },
    { id: 6, name: "Run" },
    { id: 7, name: "Terminal" },
    { id: 8, name: "Help" },
  ];

  return (
    <div className="flex items-center justify-between px-2 py-1">
      {/* TODO: left */}
      <div className="flex items-center space-x-3">
        <TopSingleItem
          key={938748}
          image="https://i.ibb.co/HHyTyLh/download-removebg-preview.png"
        />
        {/* <h1>Image</h1> */}
        {TopManu.map((item) => (
          <TopSingleItem
            key={item.id}
            name={item.name}
            dropdown={FIleDropDown}
          />
        ))}
      </div>

      {/* TODO: About Product Content */}
      <div className="flex items-center space-x-2 text-white text-xs md:text-sm font-semibold">
        {/* TODO: dot icon */}
        <FiberManualRecordIcon className="px-2" /> -{" "}
        <p>{currentTab?.name ? currentTab?.name : "Faysal Mridha"}</p> -{" "}
        <p>app</p> -<p>Visual Studio Code</p>
      </div>

      {/* TODO: al the way to right */}
      <div className="pr-4 text-white">
        <TopRight />
      </div>
    </div>
  );
}

export default TopNav;
