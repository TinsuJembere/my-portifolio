"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialLinks = [
    { href: "https://t.me/I_surrender1920", icon: faTelegram, color: "text-blue-400", label: "Telegram" },
    { href: "https://www.facebook.com", icon: faFacebook, color: "text-blue-600", label: "Facebook" },
    { href: "https://www.linkedin.com/in/tinsae-jembere-8157642b9", icon: faLinkedin, color: "text-blue-800", label: "LinkedIn" },
    { href: "https://www.youtube.com/@TinsaeJembere", icon: faYoutube, color: "text-red-600", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0c0f11] relative overflow-hidden" id="contact">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-[47.7rem] py-8 border-t border-[#a0a0a0]/20 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Side: Email */}
        <motion.div 
          className="text-center md:text-left order-2 md:order-1 mt-4 md:mt-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="mailto:tinsaejembere4@gmail.com"
            className="text-white text-sm md:text-base hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-indigo-400 hover:to-cyan-400 transition-all duration-300 flex items-center gap-2 justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            tinsaejembere4@gmail.com
          </motion.a>
        </motion.div>

        {/* Right Side: Social Media Icons */}
        <motion.div 
          className="flex justify-center md:justify-end items-center gap-6 order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.2, y: -5, rotate: [0, -10, 10, -10, 0] }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 ${social.color} rounded-full blur-md opacity-0 group-hover:opacity-50`}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <FontAwesomeIcon
                icon={social.icon}
                size="lg"
                className={`${social.color} relative z-10 transition-all duration-300 group-hover:scale-110`}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center py-4 border-t border-[#a0a0a0]/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#a0a0a0] text-xs">
          © {new Date().getFullYear()} Tinsae Jembere. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
