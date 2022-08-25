import React from "react";
import Typed from "react-typed";
import Man from "../assets/indian-man.png";
import Setup from "../assets/hero-devices.svg";
import CSS from "../assets/css.png";
import Etherium from "../assets/etherium-1.png";
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Responsive from "../assets/responsive-devices.png";
import TailwindCSS from "../assets/tailwindcss.png";

const About = () => {
  return (
    <div>
      <div className="max-w-[800px] sm:mt-[-96px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <div className="md:text-5xl sm:text-4xl text-xl font-bold py-4 flex mx-auto">
          <h1 className="mr-2">I am </h1>
          <Typed
            strings={["Front End Developer", "Web3.0 Enthusiast", "Shreyas"]}
            typeSpeed={100}
            backSpeed={75}
            loop
          />
        </div>
        <div>
          <h1 className=" sm:font-bold font-medium sm:text-xl text-base py-4 mx-auto">
            I design and code beautifully simple things, and I love what I do.
          </h1>
        </div>
        <div className="pt-4">
          <img src={Man} alt="Man" />
        </div>
      </div>
      <div className="sm:w-[50%] w-[70%] mx-auto mt-[-130px]">
        <img src={Setup} alt="Setup" />
      </div>
      <div className="bg-[#595bd4] text-white mt-[10px] sm:h-[500px] h-[700px]">
        <h1 className="text-center pt-4 translate-y-[70px] font-bold sm:text-3xl text-xl ">
          Hi, I’m Shreyas. Nice to meet you.
        </h1>
        <div
          className="w-[55%] mx-auto mt-[20px] translate-y-[70px] tracking-wide sm:leading-loose leading-relaxed
 font-medium  text-center pb-4 "
        >
          I am Junior undergraduate at National Institute Of
          Technology,Surathkal in Information Technology. I am interested in
          Frontend Web Development specific in ReactJS with TailwindCSS. I also
          do study on Web3.0, blockchain and their application.
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 w-[70%] mx-auto justify-center justify-items-center sm:mt-[-200px] mt-[-200px] bg-white rounded-md">
        <img className="h-[150px]" src={Html} alt="Html" />
        <img className="h-[150px]" src={CSS} alt="CSS" />
        <img className="h-[150px]" src={Javascript} alt="Javascript" />
        <img className="h-[150px]" src={ReactLogo} alt="ReactLogo" />
        <img className="h-[150px]" src={TailwindCSS} alt="TailwindCSS" />
        <img className="h-[150px]" src={Responsive} alt="Responsive" />
        <img className="h-[150px]" src={Etherium} alt="Etherium" />
      </div>
    </div>
  );
};

export default About;
