import React from "react";

const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 bg-black text-white p-6 justify-around gap-[50px] w-[80%] mx-auto rounded-md translate-y-[50px] ">
      <div className="text-xl md:text-2xl font-semibold md:font-bold mx-auto">
        To see my project repos visit my Github page:
      </div>
      <div className="mx-auto text-xl">
        {" "}
        <a href="github.com/username-copied">username-copied's Github</a>{" "}
      </div>
    </div>
  );
};

export default Projects;
