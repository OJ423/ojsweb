"use client";

import { useEffect, useState } from "react";
import { FaDotCircle } from "react-icons/fa";

export default function PageSectionNav({ sections }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    let currentVisibleSection = null;

    const observer = new IntersectionObserver((entries) => {
      let foundVisible = false;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentVisibleSection = entry.target.id;
          foundVisible = true;
        }
      });

      if (foundVisible) {
        setActiveSection(currentVisibleSection);
      } else {
        setActiveSection(""); // No section is visible
      }
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <nav
      aria-label="On page section navigation"
      className="hidden md:flex md:flex-col gap-2 fixed bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-4 shadow-lg  bg-white/50 rounded-full z-10 p-2"
    >
      {sections.map((section, index) => (
        <a
          key={index}
          aria-label={`Navigate to ${section} section`}
          id={section}
          href={`#${section}`}
          className={`hover:opacity-80 transition-all duration-300 ${
            activeSection === section ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <FaDotCircle />
        </a>
      ))}
    </nav>
  );
}
