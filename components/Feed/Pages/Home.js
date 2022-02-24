import React from "react";
import HomeLeftContent from "./Home/HomeLeftContent";
import HomeRightContent from "./Home/HomeRightContent";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <Fade>
      <div className="relative">
        {/* Home page bg */}
        <div
          className="absolute -z-10 text-7xl md:text-9xl font-mono top-24 opacity-70 text-[rgba(80,82,84,0.35)] font-bold"
          style={{ lineHeight: "1.3" }}
        >
          <h1>Faysal !!</h1>
          <h1>Website.</h1>
        </div>

        {/* Homepage Content */}

        <div className="grid grid-col-2 mx-auto md:flex md:items-center md:justify-between z-50 pt-[50px]">
          <Fade delay={50}>
            <HomeLeftContent />
          </Fade>

          <Fade delay={70}>
            <HomeRightContent />
          </Fade>
        </div>
      </div>
    </Fade>
  );
}

export default Home;
