import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div className="bg-black px-48 pb-12">
      <div
        id="About"
        className=" text-white md:flex items-center md:flex-wrap md:justify-center bg-red-800 shadow-xl mx-0 md:mx-20 rounded-lg p-12 pt-8  border-white border-2 shadow-white "
        
      >
        <div>
          <h2 className="font-krona text-2xl md:text-4xl  flex items-center justify-center">
            About Me
          </h2>
          <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex gap-3 py-4">
              <p>
                Hi, I'm Adarsh Verma, a web developer with a strong foundation
                in front-end and back-end development, databases, and Java. I
                love exploring new technologies and sharpening my skills through
                hands-on projects. In addition to web development, I have a keen
                interest in blockchain, AI/ML, and mechanical design software,
                with solid expertise in Linux. Currently pursuing a B.Tech in
                Smart Manufacturing at IIIT Jabalpur, graduating in 2026, I am
                also an avid astrophile, captivated by the mysteries of the
                universe and always eager to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
