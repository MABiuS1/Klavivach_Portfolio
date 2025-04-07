"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CircleUser, Briefcase, Code, Database, Wrench, Laptop } from 'lucide-react';

const AboutMe = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: Code,
      technologies: ["Golang", "Java", "TypeScript", "Python", "Dart", "C#"]
    },
    {
      category: "Frontend Frameworks",
      icon: Laptop,
      technologies: ["React", "Vue", "React Native", "Flutter", "NextJS", "Angular"]
    },
    {
      category: "Backend Frameworks",
      icon: Briefcase,
      technologies: ["Echo", "Spring Boot", "Express", "Nest"]
    },
    {
      category: "Database",
      icon: Database,
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"]
    },
    {
      category: "Mobile Development",
      icon: CircleUser,
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      category: "Infrastructure & Tools",
      icon: Wrench,
      technologies: ["Kubernetes", "Terraform", "Docker", "CI/CD", "Git"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-indigo-600 dark:from-white dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-6 hover:scale-105 transform transition-all duration-300">
            About Me
          </h2>
          
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 rounded-lg blur opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            />
            <p className="relative text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              I have over 6 month of experience in developing web applications, focusing on Full-Stack development using modern technologies. 
              Passionate about creating intuitive user experiences and scalable backend solutions. 
              I enjoy tackling complex problems and continuously learning new technologies.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300" />
                <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105 transform">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-lg mb-4 group-hover:scale-110 transform transition-all duration-300">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-700 dark:to-blue-900/30 text-gray-700 dark:text-gray-300 rounded-full hover:scale-105 transform transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gray-900 via-indigo-800 to-indigo-600 dark:from-white dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-6 hover:scale-105 transform transition-all duration-300">
            Key Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform group">
              <Laptop className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4 group-hover:scale-110 transform transition-all duration-300" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                Full Stack Skills
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end application development with modern web technologies
              </p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform group">
              <Wrench className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4 group-hover:scale-110 transform transition-all duration-300" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                Infrastructure & DevOps
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Experience with containerization, orchestration, and cloud infrastructure
              </p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform group">
              <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4 group-hover:scale-110 transform transition-all duration-300" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                Cross-Platform Development
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Building applications for web, mobile, and desktop platforms
              </p>
            </div>
          </div>
        </motion.div>
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

export default AboutMe;