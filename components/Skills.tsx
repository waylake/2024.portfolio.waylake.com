const skills = [
  "React",
  "Next.js",
  "Python",
  "Nest.js",
  "FastAPI",
  "Express",
  "Node.js",
  "TypeScript",
  "AWS",
  "Docker",
  "Terraform",
  "Ansible",
];

export default function Skills() {
  return (
    <section className="w-screen h-full flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-green-400 to-teal-400 dark:from-green-800 dark:to-teal-800">
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold
                         hover:bg-accent-color hover:text-white transition-all duration-300
                         transform hover:-translate-y-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
