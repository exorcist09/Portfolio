import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <div className="flex justify-around text-white font-krona pt-8 bg-black ">
      <div className="flex justify-center space-x-10">
        <a
          href="#home"
          className="hover:text-gray-400 transition-colors duration-300 text-lg font-semibold"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-gray-400 transition-colors duration-300 text-lg font-semibold"
        >
          Skills
        </a>
        <a
          href="#skills"
          className="hover:text-gray-400 transition-colors duration-300 text-lg font-semibold"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-gray-400 transition-colors duration-300 text-lg font-semibold"
        >
          Contact
        </a>
      </div>
      <div className="flex gap-2">
        <p>
          <LinkedInIcon />
        </p>
        <p>
          <GitHubIcon />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
