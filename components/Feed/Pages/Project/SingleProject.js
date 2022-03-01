import React from "react";
import Image from "next/image";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

function SingleProject({ project }) {
  return (
    <div className="w-full group cursor-pointer">
      {/* Image  */}
      <div className="relative">
        <Image
          src={project.image}
          width={500}
          height={300}
          className="object-contain"
        />
        {/* Image content */}
        <div className="projectCart hidden group-hover:block opacity-0 group-hover:opacity-95 transition-all ease-in-out duration-1000">
          {/* LInk content */}

          {/* content */}
          <div className="flex items-center justify-center flex-col h-full">
            <div className="flex items-center space-x-3 pb-2 text-pink-500 font-bold">
              <a href={project.github} target="_blank">
                <GitHubIcon />
              </a>
              <a href={project.live} target="_blank">
                <LinkIcon />
              </a>
            </div>

            {/* Bottom content */}
            <h1 className="font-bold italic font-mono text-xl">
              {project.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
