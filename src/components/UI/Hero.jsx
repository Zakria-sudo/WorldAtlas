import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center max-w-[90%] bg-black mx-auto text-white py-10 px-6">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl p-2 leading-tight">
            Explore the World, One Country at a Time
          </h1>
          <p className="p-2 text-gray-300">
            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
          </p>
          <button className="border-2 border-gray-500 flex items-center justify-center gap-2 bg-gray-700 px-6 py-2 rounded-full my-4 mx-auto lg:mx-0 hover:bg-gray-600 transition duration-300">
            Start Exploring <FaRegArrowAltCircleRight />
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <img src="/Images/world.png" className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[100%]" alt="World Map" />
        </div>
      </div>
    </>
  );
};

export default Hero;
