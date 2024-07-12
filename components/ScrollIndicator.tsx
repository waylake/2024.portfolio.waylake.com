import React from "react";

type Section =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "portfolio"
  | "contact";

const sections: Section[] = [
  "home",
  "about",
  "skills",
  "experience",
  "portfolio",
  "contact",
];

interface ScrollIndicatorProps {
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  currentSection,
  setCurrentSection,
}) => {
  return (
    <>
      {/* Desktop version */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => setCurrentSection(index)}
            className={`block w-3 h-3 my-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "bg-accent-color scale-125"
                : "bg-gray-400 hover:bg-accent-color"
            }`}
            aria-label={`Scroll to ${section} section`}
          />
        ))}
      </div>

      {/* Mobile version */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex md:hidden">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => setCurrentSection(index)}
            className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "bg-accent-color scale-125"
                : "bg-gray-400 hover:bg-accent-color"
            }`}
            aria-label={`Scroll to ${section} section`}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollIndicator;
