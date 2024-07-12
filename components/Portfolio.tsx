"use client";

import { useRef, useEffect, useState } from "react";

const projects = [
  {
    title: "Express 이미지 서버",
    description: "이미지 업로드 및 캐싱 서버",
    techStack: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Nginx"],
    features: [
      "Multer 미들웨어를 사용한 이미지 업로드 처리",
      "MongoDB를 활용한 이미지 저장 및 관리",
      "memory-cache 라이브러리를 이용한 메모리 캐싱 구현",
    ],
    link: "https://github.com/waylake/express-image-server",
  },
  {
    title: "LDA 토픽 모델링 앱",
    description: "YouTube 댓글 감정분석 및 통계자료 시각화",
    techStack: ["Streamlit", "Python", "MongoDB", "Nginx"],
    features: [
      "YouTube 댓글 데이터셋에서 LDA를 이용한 주요 토픽 추출",
      "BERT 모델을 활용한 감정분석",
      "다양한 차트를 통한 데이터 시각화",
    ],
    link: "http://korea-dance-data-visualization.waylake.com/",
  },
  {
    title: "배달 앱 Backend",
    description: "배달 주문 및 사용자 관리 기능을 제공하는 서버",
    techStack: [
      "Node.js",
      "TypeScript",
      "Jest",
      "MongoDB",
      "Express.js",
      "Nginx",
    ],
    features: [
      "JWT를 이용한 인증 시스템 구현",
      "Memory Cache를 활용한 JWT 블랙리스트 관리",
      "Express Rate Limit을 통한 요청 속도 제한",
      "Jest를 활용한 테스트 자동화",
    ],
    link: "", // GitHub 링크가 제공되지 않았으므로 비워둡니다.
  },
  {
    title: "Image Similarity Search System",
    description: "코사인 유사도 기반 이미지 검색 시스템",
    techStack: ["Docker", "Python", "OpenCV", "Elasticsearch", "FastAPI"],
    features: [
      "웹 스크래핑을 통한 상품 정보 수집",
      "SIFT 알고리즘을 이용한 이미지 특징 추출",
      "MinHash를 활용한 Feature hashing",
      "Elasticsearch의 script_score 쿼리를 이용한 유사도 검색",
    ],
    link: "https://github.com/waylake/Image-Similarity-Search-System",
  },
  {
    title: "Video Streaming Server",
    description: "비디오 파일 업로드 및 스트리밍 서버",
    techStack: ["Node.js", "Express", "Docker", "MinIO"],
    features: [
      "MinIO를 활용한 비디오 파일 저장",
      "ffmpeg을 이용한 HLS 형식 비디오 변환",
      "스트리밍 방식의 비디오 전송",
    ],
    link: "https://github.com/waylake/video-streaming-server",
  },
  {
    title: "Search Engine Backend",
    description: "자동완성 기능을 제공하는 검색 엔진 백엔드",
    techStack: ["Node.js", "Express.js", "Elasticsearch", "Redis", "Docker"],
    features: [
      "Redis를 활용한 검색 결과 캐싱",
      "Elasticsearch를 이용한 효율적인 검색",
      "데이터 업데이트 시 캐시 무효화 로직 구현",
      "캐싱을 통한 검색 속도 대폭 개선 (282ms → 10ms 이하)",
    ],
    link: "https://github.com/waylake/search-engin-backend",
  },
];

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-pink-400 to-purple-400 dark:from-pink-800 dark:to-purple-800">
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
      <div
        ref={scrollContainerRef}
        className="relative z-10 text-center max-w-6xl mx-auto px-4 overflow-y-auto h-full py-12 scrollbar-hide"
        style={{ maxHeight: "calc(100vh - 6rem)" }}
      >
        <h2 className="text-3xl font-light mb-6">포트폴리오</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-1/2 bg-gray-300 rounded">
        <div
          className="bg-accent-color rounded"
          style={{
            height: `${scrollPercentage}%`,
            transition: "height 0.1s",
          }}
        ></div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-accent-color">
        {project.title}
      </h3>
      <p className="mt-2 italic">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 bg-opacity-20 px-2 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      <div
        className={`mt-4 transition-all duration-300 overflow-hidden ${
          isExpanded ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="list-disc list-inside">
          {project.features.map((feature, index) => (
            <li key={index} className="mt-1">
              {feature}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-accent-color hover:underline"
          >
            프로젝트 링크
          </a>
        )}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 bg-accent-color text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors duration-300"
      >
        {isExpanded ? "접기" : "자세히 보기"}
      </button>
    </div>
  );
}
