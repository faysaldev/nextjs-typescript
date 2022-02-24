import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  removeSingleNav,
  setlectCurrentFile,
  currentTab as CurrentTabs,
  closeTab,
  selectPage,
} from "../../slice/appSlice";

function TopFeedSingleItem({ item }) {
  const currentTab = useSelector(setlectCurrentFile);
  const allTabs = useSelector(selectPage);

  const TabTrue = currentTab?.component === item.component;

  const dispatch = useDispatch();
  const CloseHandler = () => {
    dispatch(closeTab());
    dispatch(removeSingleNav(item.id));
    if (allTabs[0]) {
      dispatch(CurrentTabs(allTabs[0]));
    }
  };

  const selectCurrentTab = () => {
    dispatch(CurrentTabs(item));
  };

  return (
    <div
      className={`flex items-center justify-between space-x-4 text-white px-5 py-2 cursor-pointer text-sm relative ${
        TabTrue ? " bg-[#24292E] fileTopBorder" : "bg-[#21202090]"
      }`}
    >
      <div onClick={selectCurrentTab} className="flex items-center space-x-2">
        <Image src={item.Icon} width={15} height={15} />

        <p>{item.name}</p>
      </div>

      <CloseIcon onClick={CloseHandler} className="h-4 text-white" />
    </div>
  );
}

export default TopFeedSingleItem;
