import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex felx-col sm-flex-row border border-orange-500">
      {/*hero left side */}
      <div className="w-full sm:1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#000]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-orange-500"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
          <div className="flex items-center gap-2 ">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-orange-500"></p>
          </div>
        </div>
      </div>
      {/* hero right side*/}
      <img className= 'w-full sm:w-1/2' src={assets.wardrobe} alt="" />
    </div>
  );
};

export default Hero;
