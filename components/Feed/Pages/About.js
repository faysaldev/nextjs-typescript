import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <Fade>
      <div className="relative">
        {/* top About me text */}
        <div className="text-3xl font-sans font-semibold">
          <p>About Me</p>
        </div>
        {/* Home page bg */}
        <div
          className="absolute -z-10 text-7xl md:text-9xl font-mono top-24 opacity-70 text-[rgba(80,82,84,0.35)] font-bold"
          style={{ lineHeight: "1.3" }}
        >
          <h1>Faysal</h1>
          <h1>Full Stack</h1>
          <h1>Developer</h1>
        </div>

        {/* Homepage Content */}

        <div className="mx-auto z-50 pt-[50px] md:pt-[150px] max-w-[700px] md:flex md:items-center md:justify-center">
          <Fade delay={50}>
            <div
              className="text-center text-lg md:text-xl text-gray-200"
              style={{ lineHeight: "2" }}
            >
              <p>
                Hi there, I am{" "}
                <span className="font-semibold text-[#857ee2]">Faysal</span>{" "}
                <span className="">👋</span>, I am a Full Stack Developer. I
                will do Frontend & Backend Development for Claint. I will create
                simple and beautiful User Experiences
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}

export default About;
