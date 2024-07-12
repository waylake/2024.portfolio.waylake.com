"use client";

import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Home,
  User,
  Code,
  Briefcase,
  Folder,
  Mail,
} from "lucide-react";

type Section = "홈" | "소개" | "기술" | "경력" | "포트폴리오" | "연락처";

const sections: Section[] = [
  "홈",
  "소개",
  "기술",
  "경력",
  "포트폴리오",
  "연락처",
];

interface NavigationProps {
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  setCurrentSection,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    setIsDarkMode(darkModeMediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const getIcon = (section: Section) => {
    switch (section) {
      case "홈":
        return <Home size={18} />;
      case "소개":
        return <User size={18} />;
      case "기술":
        return <Code size={18} />;
      case "경력":
        return <Briefcase size={18} />;
      case "포트폴리오":
        return <Folder size={18} />;
      case "연락처":
        return <Mail size={18} />;
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md p-2 rounded-full z-50 shadow-lg transition-all duration-300 ease-in-out hidden md:block">
        <ul className="flex items-center space-x-1">
          {sections.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => setCurrentSection(index)}
                className={`flex items-center space-x-2 p-2 rounded-full transition-all duration-300 ${
                  currentSection === index
                    ? "bg-accent-color text-white scale-110"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {getIcon(section)}
                <span className="text-sm font-medium">{section}</span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="테마 전환"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md p-2 rounded-full z-50 shadow-lg transition-all duration-300 ease-in-out md:hidden">
        <ul className="flex justify-around items-center">
          {sections.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => setCurrentSection(index)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentSection === index
                    ? "bg-accent-color text-white scale-110"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {getIcon(section)}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="테마 전환"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
