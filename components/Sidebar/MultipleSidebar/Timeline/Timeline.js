import React from "react";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
function Timeline() {
  return (
    <div className="pl-6 flex items-center text-gray-400 hover:text-gray-200">
      <CandlestickChartIcon className="h-4" />
      <span className="text-[9px]">Uncommitted Chan..</span>
      <span className="text-[9px]">now</span>
    </div>
  );
}

export default Timeline;
