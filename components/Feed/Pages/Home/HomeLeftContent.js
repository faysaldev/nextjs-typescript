import React from "react";
import TypeAnimation from "react-type-animation";
import { addNav } from "../../../../slice/appSlice";
import { useDispatch } from "react-redux";
function HomeLeftContent() {
  const dispatch = useDispatch();

  return (
    <div className="space-y-6 z-50 w-fit mx-auto">
      <h1 className="text-4xl md:text-6xl text-bold">Faysal Mridha </h1>
      <div className="text-xl md:text-2xl font-normal">
        <TypeAnimation
          cursor={true}
          sequence={["Full Stack Web Developer", 5000]}
          wrapper="h2"
        />
      </div>

      <div
        className="flex items-center space-x-5"
        style={{ cursor: "pointer" }}
      >
        <button
          className="px-4 py-2 bg-[#857ee2] cursor-pointer border-2 rouned border-[#857ee2] hover:bg-transparent transition-all ease-in"
          onClick={() =>
            dispatch(
              addNav({
                id: 4,
                name: "project.js",
                route: "project",
                component: "Project",
                Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
              })
            )
          }
        >
          View Work
        </button>
        <button
          className="px-4 py-2 bg-transparent cursor-pointer border-2 rouned border-[#857ee2] hover:bg-[#857ee2] transition-all ease-in"
          onClick={() =>
            dispatch(
              addNav({
                id: 3,
                name: "contact.js",
                route: "contact",
                component: "Contact",
                Icon: "https://i.ibb.co/zWdF8fP/1024px-Unofficial-Java-Script-logo-2-svg.png",
              })
            )
          }
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default HomeLeftContent;
