import React from "react";
import Typed from "react-typed";
import Man from "../assets/indian-man.png";
import Setup from "../assets/office.png";

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
      <img
        src={Setup}
        alt="Setup"
        className="mx-auto max-w-[40%] mt-[-150px]"
      />
    </div>
  );
};

export default About;
