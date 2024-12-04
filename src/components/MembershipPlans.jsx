import React from "react";

// Import images
import Image1 from "../assets/C6.jpg"; // Replace with the actual path
import Image2 from "../assets/C7.jpg"; // Replace with the actual path
import Image3 from "../assets/C8.jpg"; // Replace with the actual path

const LatestImages = () => {
  const images = [
    { src: Image1, alt: "Event 1" },
    { src: Image2, alt: "Event 2" },
    { src: Image3, alt: "Event 3" },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-10">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        Latest Images
      </h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[400px] h-[300px] bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestImages;
