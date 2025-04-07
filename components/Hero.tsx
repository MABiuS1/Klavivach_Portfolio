"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const socialLinks = [
    { icon: Github, href: "https://github.com/MABiuS1", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/klavivach/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/k.1987_jp/",
      label: "Twitter",
    },
  ];

  const openModal = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300"
      id="hero"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Content container */}
      <div className="relative z-10 px-4">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/Profile.jpeg"
            alt="Profile Picture"
            className="w-48 h-48 rounded-full border-4 border-indigo-500 shadow-xl object-cover hover:border-indigo-400 transition-all duration-300 ring-4 ring-indigo-500/20 hover:scale-105 transform"
          />
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Available for hire
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-indigo-600 dark:from-white dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300">
            Hello! I&apos;m Klavivach
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300">
            Full-Stack Developer
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Passionate about creating elegant
            solutions and delivering exceptional user experiences.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-gray-700"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:from-indigo-500 hover:to-blue-400"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Contact Me
          </a>

          {/* Preview Resume */}
          <a
            href="/KlavivachCV.pdf"
            onClick={openModal}
            className="px-8 py-3 mt-4 sm:mt-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:from-green-400 hover:to-emerald-400"
          >
            Preview Resume
          </a>
        </motion.div>

        {/* Modal สำหรับ Preview Resume */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
            {/* Container หลักของ Modal */}
            <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-md shadow-lg">
              {/* Top bar */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                {/* Zoom หรือข้อความแสดงผล */}
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-semibold">Preview Resume</h3>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    (PDF)
                  </span>
                </div>

                {/* ปุ่ม Download + ปุ่ม Close */}
                <div className="flex items-center space-x-4">
                  <a
                    href="/KlavivachCV.pdf"
                    download
                    className="px-8 py-3 mt-4 sm:mt-0 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:bg-green-400"
                  >
                    Download PDF
                  </a>
                  <button
                    onClick={closeModal}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200 text-xl font-bold"
                  >
                    &times;
                  </button>
                </div>
              </div>

              {/* ส่วนแสดง PDF */}
              <div className="h-[80vh] overflow-auto p-4">
                <iframe
                  src="/KlavivachCV.pdf"
                  title="Resume Preview"
                  className="w-full h-full border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
