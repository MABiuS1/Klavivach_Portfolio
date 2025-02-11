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
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Featured Projects
        </h2>

        <div className="relative mt-8">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all transform
              ${
                canScrollLeft
                  ? "bg-indigo-500 hover:bg-indigo-600 text-white translate-x-0 opacity-100"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 -translate-x-full opacity-0"
              }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all transform
              ${
                canScrollRight
                  ? "bg-indigo-500 hover:bg-indigo-600 text-white translate-x-0 opacity-100"
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
                className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg flex-shrink-0 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Project Image Container */}
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src={project.src}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
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
                        className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full"
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
                      className="flex items-center gap-2 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
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
    </section>
  );
};

export default Projects;
