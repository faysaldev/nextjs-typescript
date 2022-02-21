import React from "react";
import ExtrenstionSingle from "./ExtrenstionSingle";

function Recomanded() {
  const installExtrenstion = [
    {
      id: 1,
      name: "Auto Close Tag",
      details: "Aumaticly Close tag name use HTML/",
      creator: "Jun Han",
    },
    {
      id: 2,
      name: "Auto Rename Tag",
      details: "Aumaticly Rename tag useing HTML/",
      creator: "Jun Han",
    },
    {
      id: 3,
      name: "Better Comments",
      details: "Improve you code skill",
      creator: "CoenradS",
    },
    {
      id: 4,
      name: "CodeSnap",
      details: "📸 Take ScreenShot To shere your Code",
      creator: "adpyke",
    },
    {
      id: 5,
      name: "CSS PEEK",
      details: "Allow peeking the css id",
      creator: "Prany Prakash",
    },
  ];

  return (
    <div className="space-y-4 pl-3">
      {installExtrenstion?.map((item) => (
        <ExtrenstionSingle
          key={item.id}
          name={item.name}
          details={item.details}
          creator={item.creator}
          recomanded
        />
      ))}
    </div>
  );
}

export default Recomanded;
