import React from "react";
import Feed from "../components/Feed/Feed";
import SideBar from "../components/Sidebar/SideBar";
import TopNav from "../components/TopNav/TopNav";

function index() {
  return (
    <div className="bg-[#252526] min-h-screen h-full text-white">
      {/* TODO: TOPNav */}
      <TopNav />
      {/* FIXME: i am the wrapper */}
      <div className="flex">
        {/* TODO: sideBar */}
        <SideBar />
        {/* TODO: Feed */}
        <Feed />
      </div>
    </div>
  );
}

export default index;
