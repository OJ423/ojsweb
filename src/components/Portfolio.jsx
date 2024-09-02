"use client";

import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight, FaRegDotCircle } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Portfolio( {images} ) {
  const [slideIndex, setSlideIndex] = useState(0);
  const currentSlide = images[slideIndex];
  
  const handleForwardSlide = () => {
    if (slideIndex === images.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex((current) => current + 1);
    }
  };

  const handleBackwardSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(images.length - 1);
    } else {
      setSlideIndex((current) => current - 1);
    }
  };

  const handleChooseSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <section className="sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/3 mx-auto rounded-xl bg-gray-100">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
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
      <div className="flex flex-col gap-4 p-8">
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