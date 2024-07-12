"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    alert("메시지가 전송되었습니다. 감사합니다!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-screen h-full flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-indigo-400 to-blue-400 dark:from-indigo-800 dark:to-blue-800">
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
      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        <h2 className="text-3xl font-light mb-6">연락처</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
            required
            className="w-full p-2 bg-white bg-opacity-20 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
            required
            className="w-full p-2 bg-white bg-opacity-20 rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="메시지"
            required
            rows={5}
            className="w-full p-2 bg-white bg-opacity-20 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-accent-color text-white rounded hover:bg-opacity-80 transition-colors duration-300"
          >
            보내기
          </button>
        </form>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://github.com/waylake"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-accent-color transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/waylake"
            className="text-2xl hover:text-accent-color transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
