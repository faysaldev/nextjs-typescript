import React, { useEffect, useState } from "react";
import ExtrenstionSingle from "./ExtrenstionSingle";

function INstallExTren({ setSearch, search }) {
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

  const [installExtations, setExtension] = useState(installExtrenstion);

  useEffect(() => {
    if (search.length > 0) {
      setExtension(
        installExtations.filter((item) =>
          item.name.toLocaleLowerCase().match(search.toLocaleLowerCase())
        )
      );
      // alert("ff");
    } else {
      setExtension(installExtrenstion);
    }
  }, [search]);

  return (
    <div className="space-y-4 pl-3">
      {installExtations?.map((item) => (
        <ExtrenstionSingle
          key={item.id}
          name={item.name}
          details={item.details}
          creator={item.creator}
        />
      ))}
    </div>
  );
}

export default INstallExTren;
