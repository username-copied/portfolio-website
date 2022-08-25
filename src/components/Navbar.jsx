import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/s.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto ">
      <img className="h-[100px] p-4 m-4" src={Logo} alt="S logo" />
      <ul className=" hidden md:flex p-4 m-4 ">
        <li className="mr-4 p-4 font-semibold">About</li>
        <li className="mr-4 p-4 font-semibold">Skills</li>
        <li className="mr-4 p-4 font-semibold">Projects</li>
        <li className="mr-4 p-4 font-semibold">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden p-4">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[40%]  border-r ease-in-out duration-500  "
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img className="h-[100px] p-4 m-4" src={Logo} alt="S logo" />
        <li className=" mx-auto p-4 border-b border-blue-600 bg-[skyblue]">
          About
        </li>
        <li className="p-4 border-b border-blue-600 bg-[skyblue]">Skills</li>
        <li className="p-4 border-b border-blue-600 bg-[skyblue]">Projects</li>
        <li className="p-4 border-b border-blue-600 bg-[skyblue]">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
