import React from "react";
import Logo from "../assets/s.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center max-w-[1240px] mx-auto ">
        <img className="mx-auto h-[100px] p-4 m-4" src={Logo} alt="S logo" />
      </div>
    </>
  );
};

export default Navbar;
