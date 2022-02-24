import React, { useState } from "react";
import SmallSideBar from "./SmallSideBar";

// todo import all the sidebar we have
import FileSidebar from "./MultipleSidebar/FileSidebar";
import SearchSidebar from "./MultipleSidebar/SearchSidebar";
import GitSidebar from "./MultipleSidebar/GitSidebar";
import DebugSidebar from "./MultipleSidebar/DebugSidebar";
import ExtrensionSidebar from "./MultipleSidebar/ExtrensionSidebar";
import TabnineSidebar from "./MultipleSidebar/TabnineSidebar";
import GitlensSidebar from "./MultipleSidebar/GitlensSidebar";
import LiveShereSidebar from "./MultipleSidebar/LiveShereSidebar";

function SideBar() {
  const [smalSidebar, setSmallSidebar] = useState("file");

  console.log(smalSidebar);

  return (
    <div className="flex max-w-[230px] h-[94vh]">
      <SmallSideBar
        smalSidebarValue={smalSidebar}
        setSmallSidebar={setSmallSidebar}
      />
      <div className="w-[300px] flex-wrap overflow-hidden px-2 hidden md:inline-flex">
        {/* TODO: fileSideBar */}
        {smalSidebar == "file" && <FileSidebar />}
        {/* TODO: Search Sidebar */}
        {smalSidebar == "search" && <SearchSidebar />}
        {/* TODO: GIt Sidebar */}
        {smalSidebar == "git" && <GitSidebar />}
        {/* TODO: RUn Debug Sitebar */}
        {smalSidebar == "debug" && <DebugSidebar />}
        {/* TODO: Extrentions */}
        {smalSidebar == "extention" && <ExtrensionSidebar />}
        {/* TODO: Tabnine */}
        {smalSidebar == "tabnine" && <TabnineSidebar />}
        {/* TODO: Gitlens */}
        {smalSidebar == "gitlens" && <GitlensSidebar />}
        {/* TODO: LiveShere */}
        {smalSidebar == "liveShere" && <LiveShereSidebar />}
      </div>
    </div>
  );
}

export default SideBar;
