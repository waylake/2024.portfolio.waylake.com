"use client";

import React from "react";
import Typical from "react-typical";

export default function Home() {
  return (
    <section className="w-screen h-full flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-red-400 to-teal-400 dark:from-gray-800 dark:to-gray-700">
      <div className="absolute inset-0 bg-gradient-light dark:bg-gradient-dark opacity-80"></div>
      <div className="animated-bg">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-light mb-4">
          안녕하세요, 저는 황도연입니다
        </h1>
        <div
          className="text-xl mb-2"
          style={{
            height: "2em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typical
            steps={["풀스택 개발자", 4000, "DevOps 엔지니어", 4000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
        <p className="text-lg">다양한 경험을 공유하며, 배우는 것을 즐깁니다</p>
      </div>
    </section>
  );
}
