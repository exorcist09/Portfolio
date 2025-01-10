import React from "react";

const Footer = () => {
  return (
    <div className="bg-black font-krona text-white py-44 px-6">
      {/* Get in Touch Section */}
      <div className="flex items-center justify-around">
        <div>
          <p className="text-8xl font-bold mb-6  md:text-left font-krona">GET IN</p>
          <p className="text-9xl font-bold mb-6  md:text-left font-krona text-gogreen">TOUCH</p>
        </div>

        <div className="flex flex-col gap-3">
          <a>MAIL</a>
          <a>LINKEDIN </a>
          <a>GITHUB</a>
          <a>PHONE NO.</a>
        </div>
      </div>

     
    </div>
  );
};

export default Footer;
