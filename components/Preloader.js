import React from "react";

function Preloader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]">
      <div className="w-full h-[852px]">
        <img
          src="https://i.ibb.co/tmtHMZd/45d1db2f2af39c5c53a43af6ee935079.gif"
          className="w-full object-cover h-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default Preloader;
