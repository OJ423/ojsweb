"use client";

import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight, FaRegDotCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";


export default function Portfolio( {images} ) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-enter-active")
  const currentSlide = images[slideIndex];
  
  const handleForwardSlide = () => {
    setFadeClass("fade-enter"); 
    setTimeout(() => {
      setSlideIndex((current) => (current === images.length - 1 ? 0 : current + 1));
      setFadeClass("fade-enter-active"); 
    }, 500);
  };

  const handleBackwardSlide = () => {
    setFadeClass("fade-enter");
    setTimeout(() => {
      setSlideIndex((current) => (current === 0 ? images.length - 1 : current - 1));
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
    <section className="sm:w-11/12 max-w-screen-md mx-auto rounded-xl bg-gray-100 relative" {...handlers}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          {...handlers}
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full">
              <Image
                alt={image.alt_text}
                src={image.src}
                width={785}
                height={442}
                quality={100}
                className="rounded-t-xl w-full h-auto z-0"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between p-4 w-full absolute bottom-0">
          <div
            onClick={handleBackwardSlide}
            className="p-2 rounded-full bg-white"
          >
            <FaArrowLeft
              size={18}
              className="cursor-pointer hover:opacity-50 transition-all duration-500"
            />
          </div>
          <div className="flex gap-2 items-center justify-center p-4 bg-white rounded-xl">
            {images.map((_, index) => (
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
      </div>
      <div className={`flex flex-col gap-4 px-8 pt-8 pb-20 ${fadeClass}`}>
        <h2 className="text-xl font-semibold">{currentSlide.title}</h2>
        <p>{currentSlide.desc}</p>
        <div className="flex gap-4 items-center">
          {currentSlide.repo && (
            <Link href={currentSlide.repo}>
              <IoLogoGithub size={32} />
            </Link>
          )}
          {currentSlide.example && (
            <Link href={currentSlide.example}>
              <HiExternalLink size={32} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}