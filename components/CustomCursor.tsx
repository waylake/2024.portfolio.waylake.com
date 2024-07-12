"use client";

import React, { useRef, useEffect } from "react";
import { useCursor } from "@/contexts/CursorContext";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { cursorType } = useCursor();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let animationFrameId: number;

    const updatePosition = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => updatePosition(e));
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const cursorClasses = `w-6 h-6 border-2 border-accent-color fixed pointer-events-none z-50 rounded-full transition-all duration-150 ease-out
    ${cursorType === "hovered" ? "scale-150 bg-accent-color bg-opacity-20" : ""}
    ${cursorType === "clicked" ? "scale-75" : ""}`;

  return (
    <div
      ref={cursorRef}
      className={cursorClasses}
      style={{
        top: "-0.75rem",
        left: "-0.75rem",
        transform: "translate(0, 0)",
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
