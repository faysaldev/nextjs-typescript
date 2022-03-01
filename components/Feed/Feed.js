import React from "react";
import FeedTopNav from "./FeedTopNav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import Github from "./Pages/Github";
import { setlectCurrentFile } from "../../slice/appSlice";
import { useSelector } from "react-redux";

function Feed() {
  const currentTab = useSelector(setlectCurrentFile);

  return (
    <div className="bg-[#24292E] w-full min-h-[85vh]">
      {/* TODO: Feed Top nav */}
      <div>
        <FeedTopNav />
      </div>

      {/* FIXME: i am the single file  */}
      <main className="p-8 h-full text-gray-100 overflow-y-scroll scrollFbarHIde">
        {currentTab?.route == "home" && <Home />}
        {currentTab?.route == "about" && <About />}
        {currentTab?.route == "project" && <Project />}
        {currentTab?.route == "contact" && <Contact />}
        {currentTab?.route == "github" && <Github />}
      </main>
    </div>
  );
}

export default Feed;
