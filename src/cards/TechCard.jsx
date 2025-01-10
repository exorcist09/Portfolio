import React from "react";

const TechCard = ({ title, image }) => {
  return (
    <div className="text-white flex flex-col items-center p-4  border-white rounded-lg shadow-lg ">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-contain mb-2"
        />
      ) : (
        <div className="w-20 h-20 bg-gray-700 flex justify-center items-center mb-2">
          <p className="text-sm text-gray-300">No Image</p>
        </div>
      )}
      {/* Render title */}
      {title ? (
        <p className="text-lg  text-center">{title}</p>
      ) : (
        <p className="text-sm text-gray-400">No Title</p>
      )}
    </div>
  );
};

export default TechCard;
