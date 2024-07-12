"use client";
import { useState } from "react";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-screen h-full flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-800 dark:to-orange-800">
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
        <h2 className="text-3xl font-light mb-6">Work Experience</h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-accent-color">
            메디아이플러스
          </h3>
          <p className="text-lg font-bold mt-2">
            풀스택 개발자 | DevOps 엔지니어
          </p>
          <p className="italic mt-1 mb-4">글로벌 임상시험 데이터 제공 회사</p>
          <div
            className={`transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-[1000px]" : "max-h-0"}`}
          >
            <h4 className="font-semibold mt-4 mb-2">주요 책임:</h4>
            <ul className="list-disc list-inside mb-4 text-left">
              <li>홈페이지 풀스택 개발</li>
              <li>데이터 수집 및 데이터 웨어하우스 구축</li>
              <li>
                임상시험 Regulation, Guideline 제공 페이지, API, 백엔드 개발
              </li>
              <li>Infrastructure as Code (IaC) 도입으로 인프라 관리 효율화</li>
              <li>임상시험 데이터 정제 및 분석</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-2">주요 성과:</h4>
            <ul className="list-disc list-inside text-left">
              <li>AWS 인프라 구축 및 최적화</li>
              <li>Route 53을 활용한 도메인 관리</li>
              <li>개발 프로세스 개선</li>
              <li>사내 개발 환경 관리</li>
              <li>IaC 도입으로 인프라 구축 시간 단축 및 서비스 안정성 향상</li>
            </ul>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 bg-accent-color text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors duration-300"
          >
            {isExpanded ? "접기" : "자세히 보기"}
          </button>
        </div>
      </div>
    </section>
  );
}
