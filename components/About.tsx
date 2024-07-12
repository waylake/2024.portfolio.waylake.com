export default function About() {
  return (
    <section className="w-screen h-full flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-800 dark:to-purple-800">
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
        <h2 className="text-3xl font-light mb-6">About Me</h2>
        <p className="mb-4">
          저는 프론트엔드, 백엔드, DevOps를 아우르는 다재다능한 개발자입니다.
          의료 데이터 분야에서의 경험을 바탕으로, 복잡한 문제를 효율적으로
          해결하는 것을 즐깁니다.
        </p>
        <p className="mb-4">
          현재 산업기능요원으로 전직 대기 중이며, 지속적으로 성장할 수 있는
          환경에서 제 역량을 발휘하고 싶습니다.
        </p>
        <p className="font-bold">
          학력: 한세사이버보안고등학교(해킹보안과) 2020년 졸업
        </p>
      </div>
    </section>
  );
}
