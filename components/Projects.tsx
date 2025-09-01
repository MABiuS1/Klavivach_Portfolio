"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    src: "/sport-complex.png",
    title: "Sport Complex",
    description:
      "This is my college project booking system built using Go and Next.js using Microservices.",
    link: "https://github.com/6531503042/Sport-Complex",
    demoLink: null,
    stack: ["Go", "Next.js", "Microservices", "GRPC"],
  },
  {
    src: "/Deap.webp",
    title: "Deap Appointment App",
    description:
      "Deap App is an appointment mobile application developed using Flutter and Firebase.",
    link: "https://github.com/6531503042/Deap-Mobile-Application",
    demoLink: null,
    stack: ["Flutter", "Firebase"],
  },
  {
    src: "/Weather-Forecast.png",
    title: "Weather-Forecast",
    description:
      "A weather forecast application developed using Spring Boot, Java, and JSP during my 2nd year. It provides current weather updates and a 5-day forecast.",
    link: "https://github.com/maefahluang-uni/99-project-forecastweather-system-group-14",
    demoLink: null,
    stack: ["Spring Boot", "Java", "JSP"],
  },
  {
    src: "/HLLC.png",
    title: "How to Live and Learn on Campus 2024",
    description:
      "This project is licensed under the How to Live and Learn on Campus Developer Team only.",
    link: "https://github.com/jemiezler/hllc-2024",
    demoLink: null,
    stack: ["Nuxt", "Vue", "Nest", "MongoDB"],
  },
  {
    src: "/HLLC2025.png",
    title: "How to Live and Learn on Campus 2025",
    description:
      "This project is licensed under the How to Live and Learn on Campus Developer Team only.",
    link: "https://github.com/HLLC-MFU/HLLC-2025",
    demoLink: "https://apps.apple.com/th/app/hllc/id6748238190",
    stack: ["React Native", "Expo", "TypeScript", "Next.js", "WebSocket" , "Go" , "Nest", "MongoDB"],
  },
  {
    src: "icon/yakkaw_icon.png",
    title: "Yakkaw Mobile Application",
    description:
      "Yakkaw is a modern mobile application designed to monitor air pollution issues in Thailand, starting from Chiang Rai and expanding to northern provinces. It provides real-time PM2.5 air quality data, interactive maps, and health-based recommendations.",
    link: "https://github.com/franz1us/Yakkaw-Mobile-Application",
    demoLink: null,
    stack: ["ReactNative", "SQLite ",],
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null); // Fix here
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      id="projects"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-indigo-800 to-indigo-600 dark:from-white dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="relative mt-8">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all transform hover:scale-110
              ${
                canScrollLeft
                  ? "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white translate-x-0 opacity-100"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 -translate-x-full opacity-0"
              }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all transform hover:scale-110
              ${
                canScrollRight
                  ? "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white translate-x-0 opacity-100"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 translate-x-full opacity-0"
              }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Container */}
          <div
            ref={scrollRef}
            onScroll={checkScrollability}
            className="overflow-x-auto hide-scrollbar flex space-x-6 pb-8 px-4 scroll-smooth sm:justify-start"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="w-full max-w-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg flex-shrink-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Project Image Container */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src={project.src}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600 dark:from-indigo-900/30 dark:to-blue-900/30 dark:text-indigo-300 rounded-full hover:scale-105 transform transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-all duration-300 hover:translate-x-1 transform"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-all duration-300 hover:translate-x-1 transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgb(0 0 0 / 0.1) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Projects;
