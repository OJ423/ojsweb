"use client"

import Image from "next/image";
import { BsChatQuote } from "react-icons/bs";
import { testimonials } from "../constants";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegDotCircle } from "react-icons/fa";

export default function PeterWilliams() {
  const [slideIndex, setSlideIndex] = useState(0);
  const currentSlide = testimonials[slideIndex];
  
  const handleForwardSlide = () => {
    if (slideIndex === testimonials.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex((current) => current + 1);
    }
  };

  const handleBackwardSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(testimonials.length - 1);
    } else {
      setSlideIndex((current) => current - 1);
    }
  };

  const handleChooseSlide = (index) => {
    setSlideIndex(index);
  };
  
  return (
    <section className="w-full py-20 bg-teal-500 static lg:relative">
      <div className="lg:relative overflow-hidden">
        <div className="w-11/12 md:w-3/5 mx-auto min-h-96 flex flex-col justify-center">
            <div key={currentSlide.name}>
              <p className="md:text-xl font-bold text-white">
                {currentSlide.quote}
              </p>
              <div className="flex items-center gap-4 mt-8">
              <Image
                src={currentSlide.img}
                alt={`Head shot of ${currentSlide.name}, ${currentSlide.title}`}
                height={80}
                width={80}
                className="w-12 h-auto rounded-full"
              />
              <div>
                <p className="uppercase text-gray-700 font-bold text">
                  {currentSlide.name}
                </p>
                <p className="proper text-gray-100 font-bold text-sm">
                  {currentSlide.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-10 text-[120px] hidden lg:block">
        <BsChatQuote size={128} className="text-white opacity-20" />
      </div>
      <div className="absolute bottom-10 right-10 text-[120px] hidden lg:block">
        <BsChatQuote size={128} className="text-white opacity-20" />
      </div>
      <div className="flex items-center justify-between p-4 w-full">
          <div
            onClick={handleBackwardSlide}
            className="p-2 rounded-full bg-white"
          >
            <FaArrowLeft
              size={18}
              className="cursor-pointer hover:opacity-50 transition-all duration-500"
            />
          </div>
          <div className="flex gap-2 items-center justify-center p-4 bg-white rounded-xl invisible lg:visible">
            {testimonials.map((_, index) => (
              <FaRegDotCircle
                key={index}
                onClick={() => handleChooseSlide(index)}
                className={`${
                  slideIndex === index ? "text-teal-500" : "text-gray-400"
                } cursor-pointer transition-colors duration-300`}
              />
            ))}
          </div>
          <div
            onClick={handleForwardSlide}
            className="p-2 rounded-full bg-white"
          >
            <FaArrowRight
              size={18}
              className="cursor-pointer hover:opacity-50 transition-all duration-500"
            />
          </div>
        </div>
    </section>
  );
}
