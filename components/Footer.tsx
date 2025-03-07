"use client"
import React from 'react';
import { Heart, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = {
    contact: [
      { icon: Mail, text: 'klavivach1@gmail.com', href: 'mailto:klavivach1@gmail.com' },
      { icon: MapPin, text: 'Bangkok, Thailand' },
      { icon: Phone, text: '+66 0918461046', href: 'tel:+660918461046' }
    ],
    links: [
      { text: 'About', href: '#about' },
      { text: 'Projects', href: '#projects' },
      { text: 'Skills', href: '#skills' },
      { text: 'Contact', href: '#contact' }
    ],
    social: [
      { text: 'LinkedIn', href: 'https://www.linkedin.com/in/klavivach/' },
      { text: 'GitHub', href: 'https://github.com/MABiuS1' },
      { text: 'Instagram', href: 'https://www.instagram.com/k.1987_jp/' }
    ]
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              {footerSections.contact.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <item.icon className="h-4 w-4 mr-2" />
                      <span>{item.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerSections.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerSections.social.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span>&copy; {currentYear} Klavivach. All rights reserved.</span>
              <Heart className="h-4 w-4 mx-2 text-red-500" />
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors focus:outline-none"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;