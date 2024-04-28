import React, { useState } from "react";
import image1 from"../../assets/images/background_image.jpeg";
import image2 from "../../assets/images/github_image.png";
import image3 from "../../assets/images/facebook_image.png";
import image4 from "../../assets/images/facebook_image.png";
import image5 from "../../assets/images/facebook_image.png";


const SliderShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full h-screen object-cover" />
      <div className="absolute top-1/2 left-0 w-full flex justify-between px-4">
        <button onClick={prevSlide} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none">
          Prev
        </button>
        <button onClick={nextSlide} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none">
          Next
        </button>
      </div>
    </div>
  );
};


export default SliderShow;
