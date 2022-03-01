import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import Feed from "../components/Feed/Feed";
import Preloader from "../components/Preloader";
import SideBar from "../components/Sidebar/SideBar";
import TopNav from "../components/TopNav/TopNav";

function Index() {
  const [loadings, SetLoading] = useState(true);
  setTimeout(() => {
    SetLoading(false);
  }, 3000);

  return (
    <div className="bg-[#252526] min-h-screen h-full text-white relative">
      {/* TODO: TOPNav */}
      <TopNav />
      {/* FIXME: i am the wrapper */}
      <div className="flex h-fit">
        {/* TODO: sideBar */}
        <SideBar />
        {/* TODO: Feed */}
        <Feed />
      </div>

      <BottomNav />

      {loadings && <Preloader />}
    </div>
  );
}

export default Index;
