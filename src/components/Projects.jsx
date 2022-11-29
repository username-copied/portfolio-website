import React from "react";

const Projects = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 bg-black text-white p-6 justify-around gap-[50px] w-[80%] my-[50px] mx-auto rounded-md translate-y-[50px] ">
        <div className="text-xl md:text-2xl font-semibold md:font-bold mx-auto">
          To see my project repos visit my Github page:
        </div>
        <div className="mx-auto text-xl">
          {" "}
          <a href="https://github.com/username-copied">
            username-copied's Github
          </a>{" "}
        </div>
      </div>

      <div className="grid md:grid-cols-2 bg-white text-black p-6 justify-around gap-[50px] w-[80%] mx-auto rounded-md translate-y-[50px] ">
        <p className="text-xl md:text-2xl font-semibold md:font-bold mx-auto">
          Resume:
        </p>
        <a
          className="mx-auto text-xl"
          href="https://drive.google.com/file/d/1e8f5F2dXMRxUkOFYaBaPjm1KnLy0GNAp/view?usp=sharing"
        >
          Resume Link
        </a>
      </div>
    </>
  );
};

export default Projects;
