import React from "react";
import Fade from "react-reveal/Fade";
import SingleProject from "./Project/SingleProject";

function Project() {
  const project = [
    {
      id: 1,
      image: "https://i.ibb.co/zGr1xkp/Screenshot-2.png",
      name: "DeveBooks",
      github: "https://github.com/faysaldev/dev-books-claints",
      live: "https://fm-devbooks.netlify.app/",
    },
    {
      id: 2,
      image: "https://i.ibb.co/zGr1xkp/Screenshot-2.png",
      name: "DeveBooks",
      github: "https://github.com/faysaldev/dev-books-claints",
      live: "https://fm-devbooks.netlify.app/",
    },
    {
      id: 3,
      image: "https://i.ibb.co/zGr1xkp/Screenshot-2.png",
      name: "DeveBooks",
      github: "https://github.com/faysaldev/dev-books-claints",
      live: "https://fm-devbooks.netlify.app/",
    },
    {
      id: 3,
      image: "https://i.ibb.co/zGr1xkp/Screenshot-2.png",
      name: "DeveBooks",
      github: "https://github.com/faysaldev/dev-books-claints",
      live: "https://fm-devbooks.netlify.app/",
    },
    {
      id: 3,
      image: "https://i.ibb.co/zGr1xkp/Screenshot-2.png",
      name: "DeveBooks",
      github: "https://github.com/faysaldev/dev-books-claints",
      live: "https://fm-devbooks.netlify.app/",
    },
    {
      id: 3,
      image: "https://i.ibb.co/zGr1xkp/Screenshot-2.png",
      name: "DeveBooks",
      github: "https://github.com/faysaldev/dev-books-claints",
      live: "https://fm-devbooks.netlify.app/",
    },
    {
      id: 3,
      image: "https://i.ibb.co/zGr1xkp/Screenshot-2.png",
      name: "DeveBooks",
      github: "https://github.com/faysaldev/dev-books-claints",
      live: "https://fm-devbooks.netlify.app/",
    },
  ];

  return (
    <Fade>
      <div className="relative">
        {/* top About me text */}
        <div className="text-3xl font-sans font-semibold py-2">
          <p>My Project</p>
        </div>
        {/* Home page bg */}
        <div
          className="absolute -z-10 text-7xl md:text-9xl font-mono top-24 opacity-70 text-[rgba(80,82,84,0.35)] font-bold"
          style={{ lineHeight: "1.3" }}
        >
          <h1> My Project</h1>
        </div>

        {/* All the Project Taht I have */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-[85vh] gap-x-0 gap-y-3 sm:gap-y-0 sm:gap-x-12 scrollFbarHIde overflow-y-scroll pt-4">
          {project?.map((project) => (
            <Fade delay={70}>
              <SingleProject key={project.id} project={project} />
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default Project;
