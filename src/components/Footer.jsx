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
    <footer className="bg-[#0c0f11]" id="contact">
      <div className="container mx-auto max-w-[47.7rem] py-4 border-t-1 border-[#a0a0a0] px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Copyright and Links */}
        <motion.div 
          className="text-center md:text-left text-white text-sm order-2 md:order-1 mt-4 md:mt-0"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.3 }}
        >
          tinsaejembere4@gmail.com
        </motion.div>

        {/* Right Side: Social Media Icons */}
        <motion.div 
          className="flex justify-center md:justify-end items-center gap-4 order-1 md:order-2"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.3 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              <FontAwesomeIcon
                icon={social.icon}
                size="lg"
                className={`${social.color} transition-colors duration-200`}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
