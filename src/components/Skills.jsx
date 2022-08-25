import React from "react";
import CSS from "../assets/css.png";
import Etherium from "../assets/etherium-1.png";
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Responsive from "../assets/responsive-devices.png";
import TailwindCSS from "../assets/tailwindcss.png";

const Skills = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-3 grid-cols-2 w-[70%] mx-auto justify-center justify-items-center sm:mt-[-200px] mt-[-200px] bg-white rounded-md">
        <img
          className="h-[150px] rounded-md m-4 hover:bg-gray-300 duration-[1s]"
          src={Html}
          alt="Html"
        />
        <img
          className="h-[150px] rounded-md m-4 hover:bg-gray-300 duration-[1s]"
          src={CSS}
          alt="CSS"
        />
        <img
          className="h-[150px] rounded-md m-4 hover:bg-gray-300 duration-[1s]"
          src={Javascript}
          alt="Javascript"
        />
        <img
          className="h-[150px] rounded-md m-4 hover:bg-gray-300 duration-[1s]"
          src={ReactLogo}
          alt="ReactLogo"
        />
        <img
          className="h-[150px] rounded-md m-4 hover:bg-gray-300 duration-[1s]"
          src={TailwindCSS}
          alt="TailwindCSS"
        />
        <img
          className="h-[150px] rounded-md m-4 hover:bg-gray-300 duration-[1s]"
          src={Responsive}
          alt="Responsive"
        />
        <img
          className="h-[150px]  rounded-md m-4 hover:bg-gray-300 duration-[1s]"
          src={Etherium}
          alt="Etherium"
        />
      </div>
    </div>
  );
};

export default Skills;
