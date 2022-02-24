import React from "react";
import SmallSIdebarBottom from "./SmallSIdebarBottom";
// todo icon
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayDisabledIcon from "@mui/icons-material/PlayDisabled";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

function SmallSideBar({ smalSidebarValue, setSmallSidebar }) {
  return (
    <div className="flex flex-col justify-between bg-[#24292E]">
      {/* TODO: small sidebar Top */}
      <div className="space-y-6">
        {/* TODO: file  */}
        <div
          className={`relative px-3 group transition-all ease-in ${
            smalSidebarValue == "file" && "borderline"
          }`}
        >
          <FileCopyIcon
            onClick={() => setSmallSidebar("file")}
            className={`cursor-pointer text-gray-700 group-hover:text-gray-200 transition-all ease-in-out ${
              smalSidebarValue == "file" && "text-gray-200"
            }`}
          />
          {/* TODO: TopllTip */}
          <p className="absolute z-10 left-11 top-1/2 transform -translate-y-1/2 min-w-[220px] rounded max-w-[250px] text-xs px-1 py-1  bg-[#212121] hidden group-hover:block transition-all ease-in duration-700 delay-1000">
            Explore (Ctrl + Shift + E) - unsaved file
          </p>
        </div>

        {/* TODO: Search  */}
        <div
          className={`relative px-3 group transition-all ease-in ${
            smalSidebarValue == "search" && "borderline"
          }`}
        >
          <SearchIcon
            onClick={() => setSmallSidebar("search")}
            className={`cursor-pointer text-gray-700 group-hover:text-gray-200 transition-all ease-in-out ${
              smalSidebarValue == "search" && "text-gray-200"
            }`}
          />
          {/* TODO: TopllTip */}
          <p className="absolute z-10 left-11 top-1/2 transform -translate-y-1/2 min-w-[220px] rounded max-w-[250px] text-xs px-1 py-1  bg-[#212121] hidden group-hover:block transition-all ease-in duration-700 delay-1000">
            Search (Ctrl + Shift + F)
          </p>
        </div>

        {/* TODO: githuv  */}
        <div
          className={`relative px-3 group transition-all ease-in ${
            smalSidebarValue == "git" && "borderline"
          }`}
        >
          <GitHubIcon
            onClick={() => setSmallSidebar("git")}
            className={`cursor-pointer text-gray-700 group-hover:text-gray-200 transition-all ease-in-out ${
              smalSidebarValue == "git" && "text-gray-200"
            }`}
          />
          {/* TODO: TopllTip */}
          <p className="absolute z-10 left-11 top-1/2 transform -translate-y-1/2 min-w-[220px] rounded max-w-[250px] text-xs px-1 py-1  bg-[#212121] hidden group-hover:block transition-all ease-in duration-700 delay-1000">
            Source Control(Ctrl + Shift + G G) - 18 pending Changes
          </p>
        </div>

        {/* TODO: Search  */}
        <div
          className={`relative px-3 group transition-all ease-in ${
            smalSidebarValue == "debug" && "borderline"
          }`}
        >
          <PlayDisabledIcon
            onClick={() => setSmallSidebar("debug")}
            className={`cursor-pointer text-gray-700 group-hover:text-gray-200 transition-all ease-in-out ${
              smalSidebarValue == "debug" && "text-gray-200"
            }`}
          />
          {/* TODO: TopllTip */}
          <p className="absolute z-10 left-11 top-1/2 transform -translate-y-1/2 min-w-[220px] rounded max-w-[250px] text-xs px-1 py-1  bg-[#212121] hidden group-hover:block transition-all ease-in duration-700 delay-1000">
            Explore (Ctrl + Shift + D) - unsaved file
          </p>
        </div>

        {/* TODO: Search  */}
        <div
          className={`relative px-3 group transition-all ease-in ${
            smalSidebarValue == "extention" && "borderline"
          }`}
        >
          <DashboardCustomizeIcon
            onClick={() => setSmallSidebar("extention")}
            className={`cursor-pointer text-gray-700 group-hover:text-gray-200 transition-all ease-in-out ${
              smalSidebarValue == "extention" && "text-gray-200"
            }`}
          />
          {/* TODO: TopllTip */}
          <p className="absolute z-10 left-11 top-1/2 transform -translate-y-1/2 min-w-[220px] rounded max-w-[250px] text-xs px-1 py-1  bg-[#212121] hidden group-hover:block transition-all ease-in duration-700 delay-1000">
            Extrensions (Ctrl + Shift + X)
          </p>
        </div>

        {/* TODO: Search  */}
        <div
          className={`relative px-3 group transition-all ease-in ${
            smalSidebarValue == "tabnine" && "borderline"
          }`}
        >
          <ChangeCircleIcon
            onClick={() => setSmallSidebar("tabnine")}
            className={`cursor-pointer text-gray-700 group-hover:text-gray-200 transition-all ease-in-out ${
              smalSidebarValue == "tabnine" && "text-gray-200"
            }`}
          />
          {/* TODO: TopllTip */}
          <p className="absolute z-10 left-11 top-1/2 transform -translate-y-1/2 min-w-[220px] rounded max-w-[250px] text-xs px-1 py-1  bg-[#212121] hidden group-hover:block transition-all ease-in duration-700 delay-1000">
            Tabnine Al Asistent
          </p>
        </div>

        {/* TODO: Search  */}
        <div
          className={`relative px-3 group transition-all ease-in ${
            smalSidebarValue == "gitlens" && "borderline"
          }`}
        >
          <AcUnitIcon
            onClick={() => setSmallSidebar("gitlens")}
            className={`cursor-pointer text-gray-700 group-hover:text-gray-200 transition-all ease-in-out ${
              smalSidebarValue == "gitlens" && "text-gray-200"
            }`}
          />
          {/* TODO: TopllTip */}
          <p className="absolute left-11 top-1/2 transform -translate-y-1/2 w-fit min-w-[220px]  rounded max-w-[250px] text-xs px-1 py-1  bg-[#383838] hidden group-hover:block transition-all ease-in duration-700 delay-1000">
            GitLens
          </p>
        </div>

        {/* TODO: Search  */}
        <div
          className={`relative px-3 group transition-all ease-in ${
            smalSidebarValue == "liveShere" && "borderline"
          }`}
        >
          <ReplyAllIcon
            onClick={() => setSmallSidebar("liveShere")}
            className={`cursor-pointer text-gray-700 group-hover:text-gray-200 transition-all ease-in-out ${
              smalSidebarValue == "liveShere" && "text-gray-200"
            }`}
          />
          {/* TODO: TopllTip */}
          <p className="absolute z-10 left-11 top-1/2 transform -translate-y-1/2 min-w-[220px] rounded max-w-[250px] text-xs px-1 py-1  bg-[#212121] hidden group-hover:block transition-all ease-in duration-700 delay-1000">
            Search (Ctrl + Shift + F)
          </p>
        </div>
      </div>

      {/* FIXME: small sidebar Bottom */}
      <div>
        <SmallSIdebarBottom />
      </div>
    </div>
  );
}

export default SmallSideBar;
