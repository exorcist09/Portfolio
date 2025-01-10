import React from "react";
import TechCard from "../cards/TechCard";
import { tech } from "../data/data";
import { tool } from "../data/data";

const Skills = () => {
  return (
    <div className="bg-black  flex justify-center items-center flex-col pt-8 px-48 pb-32">
      <h1 className="font-krona text-3xl text-white">Technologies I use</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {tech[0].tech.map((item, index) => (
          <TechCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
      <h1 className="font-krona text-3xl text-white">Tools I use</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {tool[0].tool.map((item) => (
          <TechCard title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
