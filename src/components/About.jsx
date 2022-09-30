import React from "react";
import Typed from "react-typed";
// import Man from "../assets/indian-man.png";
import Setup from "../assets/hero-devices.svg";
import Myself from "../assets/BackgroundImg.jpg";

const About = () => {
  return (
    <div>
      <div className="max-w-[800px] sm:mt-[-150px]  w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
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
        <div className="rounded-md drop-shadow-2xl hover:scale-110 duration-100 w-[50%] bg-[#6e07f3] p-4">
          <img src={Myself} alt="Man" />
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
    </div>
  );
};

export default About;
