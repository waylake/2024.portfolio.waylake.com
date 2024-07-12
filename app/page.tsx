"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Page() {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "right" && currentSection < 5) {
      setCurrentSection(currentSection + 1);
    } else if (direction === "left" && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleScroll("right");
      } else if (e.key === "ArrowLeft") {
        handleScroll("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection]);

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <Navigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          width: "600vw",
          transform: `translateX(-${currentSection * 100}vw)`,
        }}
      >
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
      <CustomCursor />
    </main>
  );
}
