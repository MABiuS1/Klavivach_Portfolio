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
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-indigo-600 dark:from-white dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            />
            <p className="relative text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 shadow-xl">
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300" />
                <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-gray-700 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
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
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Key Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Laptop className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Full Stack Skills
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end application development with modern web technologies
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Wrench className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Infrastructure & DevOps
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Experience with containerization, orchestration, and cloud infrastructure
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Cross-Platform Development
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Building applications for web, mobile, and desktop platforms
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;