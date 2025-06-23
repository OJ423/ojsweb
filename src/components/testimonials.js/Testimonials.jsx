"use client";

import Image from "next/image";
import { BsChatQuote } from "react-icons/bs";
import { testimonials } from "../constants";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaRegDotCircle } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

export default function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-enter-active")
  const currentSlide = testimonials[slideIndex];

  const handleForwardSlide = () => {
    setFadeClass("fade-enter"); 
    setTimeout(() => {
      setSlideIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
      setFadeClass("fade-enter-active"); 
    }, 500);
  };

  const handleBackwardSlide = () => {
    setFadeClass("fade-enter");
    setTimeout(() => {
      setSlideIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
      setFadeClass("fade-enter-active");
    }, 500);
  };

  const handleChooseSlide = (index) => {
    setFadeClass("fade-enter");
    setTimeout(() => {
      setSlideIndex(index);
      setFadeClass("fade-enter-active");
    }, 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleForwardSlide,
    onSwipedRight: handleBackwardSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(handleForwardSlide, 5000); 
    return () => clearInterval(interval); 
  }, [slideIndex]);


  return (
    <section className="w-full py-20 bg-gradient-to-br from-teal-500 to-indigo-600 static relative" {...handlers}>
      <div className="relative overflow-hidden">
        <div className={`px-8 max-w-screen-lg mx-auto min-h-96 flex flex-col justify-center ${fadeClass}`}>
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
      <div className="absolute top-6 left-6 text-[120px]">
        <BsChatQuote className="text-white opacity-20 text-5xl sm:text-7xl md:text-9xl" />
      </div>
      <div className="absolute bottom-6 right-6 text-[120px]">
        <BsChatQuote className="text-white opacity-20 text-5xl sm:text-7xl md:text-9xl" />
      </div>
      <div className="w-full bg-white absolute bottom-0 bg-white bg-opacity-20">
        <div className="flex items-center justify-between max-w-screen-lg mx-auto">
          <div
            onClick={handleBackwardSlide}
            className="p-2"
          >
            <FaArrowLeft
              size={18}
              className="cursor-pointer hover:opacity-50 transition-all duration-500"
            />
          </div>
          <div className="flex gap-2 items-center justify-center p-4">
            {testimonials.map((_, index) => (
              <FaRegDotCircle
                key={index}
                onClick={() => handleChooseSlide(index)}
                className={`${
                  slideIndex === index ? "text-teal-700" : "text-white"
                } cursor-pointer transition-all duration-500`}
              />
            ))}
          </div>
          <div onClick={handleForwardSlide} className="p-2">
            <FaArrowRight
              size={18}
              className="cursor-pointer hover:opacity-50 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
