import React from "react";
import { useSelector } from "react-redux";
import { selectPage } from "../../slice/appSlice";
import TopFeedSingleItem from "./TopFeedSingleItem";

function FeedTopNav() {
  const allPage = useSelector(selectPage);

  return (
    <div className="flex items-center w-full bg-[#21202090]">
      {allPage?.map((item) => (
        <TopFeedSingleItem key={item.id} id={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedTopNav;
