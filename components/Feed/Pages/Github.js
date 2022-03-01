import React from "react";
import Fade from "react-reveal/Fade";
import GithubTop from "./Github/GithubTop";

function Github() {
  return (
    <Fade>
      <div className="relative">
        <GithubTop />

        {/* git hub bottom */}
        <div className="mx-auto z-50 pt-[50px] md:pt-[150px] max-w-[700px] md:flex md:items-center md:justify-center">
          <Fade delay={50}>
            <div
              className="text-center text-lg md:text-xl text-gray-200"
              style={{ lineHeight: "2" }}
            >
              <p>
                Hi there, I am{" "}
                <span className="font-semibold text-[#857ee2]">Faysal</span>{" "}
                <span className="">🥰</span>, I am a Full Stack Developer. Make
                sure Follow Me on github.{" "}
                <a
                  className="underline text-[#857ee2]"
                  target="_blank"
                  href="https://github.com/faysaldev"
                >
                  faysaldev
                </a>
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}

export default Github;
