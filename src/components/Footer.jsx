import React from "react";
import Logo from "../assets/s.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Gmail from "../assets/gmail.png";
import Github from "../assets/github.png";
import Twitter from "../assets/twitter.png";
import Whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="bg-[#595bd4] text-white flex flex-col ">
      <div>
        <img
          src={Logo}
          alt="Logo"
          className="h-[80px] mx-auto mt-[100px] mb-[30px] bg-white rounded-md"
        />
      </div>
      <div className="font-bold mx-auto">Connect with me on Socials:</div>
      <div className="flex my-4 mx-auto gap-[10px]">
        <a href="https://www.instagram.com/shreyas.waykar/">
          <img
            src={Instagram}
            alt="Instagram"
            className="h-[70px] bg-white rounded-md hover:bg-gray-300  duration-[1s]"
          />
        </a>
        <a href="https://www.linkedin.com/in/shreyaswaykar/">
          <img
            src={Linkedin}
            alt="Linkedin"
            className="h-[70px] bg-white rounded-md hover:bg-gray-300  duration-[1s]"
          />
        </a>
        <a href="mailto:shreyas.waykar123@gmail.com">
          <img
            src={Gmail}
            alt="Gmail"
            className="h-[70px] bg-white rounded-md hover:bg-gray-300  duration-[1s]"
          />
        </a>
        <a href="https://github.com/username-copied">
          <img
            src={Github}
            alt="Github"
            className="h-[70px] bg-white rounded-md hover:bg-gray-300  duration-[1s]"
          />
        </a>
        <a href="https://twitter.com/waykar_m">
          <img
            src={Twitter}
            alt="Twitter"
            className="h-[70px] bg-white rounded-md hover:bg-gray-300  duration-[1s]"
          />
        </a>
        <a href="https://wa.me/qr/EXIFGKF56XSEO1">
          <img
            src={Whatsapp}
            alt="Whatsapp"
            className="h-[70px] bg-white rounded-md hover:bg-gray-300  duration-[1s]"
          />
        </a>
      </div>
      <div className="font-medium mx-auto my-4">Made with ❤️ by Shreyas</div>
    </div>
  );
};

export default Footer;
