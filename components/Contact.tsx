"use client"

import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Loader, Mail, MessageSquare, Github, Linkedin, Instagram } from 'lucide-react';

// Custom Alert Component
const CustomAlert = ({ type, message, onClose }) => (
  <div className={`p-4 rounded-lg mb-6 flex items-start space-x-3 ${
    type === 'success' 
      ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200' 
      : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200'
  }`}>
    <div className="flex-shrink-0">
      {type === 'success' 
        ? <CheckCircle className="h-5 w-5" /> 
        : <AlertCircle className="h-5 w-5" />
      }
    </div>
    <div className="flex-1">
      <h3 className="font-medium">
        {type === 'success' ? 'Success' : 'Error'}
      </h3>
      <p className="text-sm mt-1">{message}</p>
    </div>
    <button 
      onClick={onClose}
      className="flex-shrink-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    >
      <span className="sr-only">Close</span>
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({ email: '', message: '' });
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate email
    if (!validateEmail(formState.email)) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/movjlpde", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setAlert({
          show: true,
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormState({ email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/klavivach/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/MABiuS1", icon: Github, label: "GitHub" },
    { href: "https://www.instagram.com/k.1987_jp/", icon: Instagram, label: "Instagram" }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Get in Touch
        </h2>
        
        {alert.show && (
          <CustomAlert 
            type={alert.type} 
            message={alert.message} 
            onClose={() => setAlert({ ...alert, show: false })}
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                aria-label="Email Address"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Your message here..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                aria-label="Message"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Loader className="animate-spin h-5 w-5" />
                <span>Sending...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </form>

        <div className="flex justify-center mt-10 space-x-6">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;