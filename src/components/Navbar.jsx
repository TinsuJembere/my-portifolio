import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu on link click
  };

  return (
    <header className="fixed w-full z-50 bg-[#0c0f11]/95 backdrop-blur-md border-b border-[#a0a0a0]/10 pt-5 pb-10">
      <nav className="container mx-auto max-w-[47.7rem] px-6 flex items-center justify-between">
        {/* Site Title */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ScrollLink
            to="home"
            smooth={true}
            offset={-70}
            duration={300}
            className="cursor-pointer font-bold text-lg tracking-widest text-[#a0a0a0] uppercase hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-indigo-400 hover:to-cyan-400 transition-all duration-300"
          >
            Tinsae J.
          </ScrollLink>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-lg text-[#a0a0a0]">
          <motion.div 
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ScrollLink
              to="home"
              smooth={true}
              offset={-70}
              duration={300}
              className="cursor-pointer hover:text-white transition-colors duration-150"
            >
              Home
            </ScrollLink>
          </motion.div>
          <motion.div 
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ScrollLink
              to="about"
              smooth={true}
              offset={-70}
              duration={300}
              className="cursor-pointer hover:text-white transition-colors duration-150"
            >
              About
            </ScrollLink>
          </motion.div>
          <motion.div 
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ScrollLink
              to="services"
              smooth={true}
              offset={-70}
              duration={300}
              className="cursor-pointer hover:text-white transition-colors duration-150"
            >
              Services
            </ScrollLink>
          </motion.div>
          <motion.div 
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-70}
              duration={300}
              className="cursor-pointer hover:text-white transition-colors duration-150"
            >
              Projects
            </ScrollLink>
          </motion.div>
          <motion.div 
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-70}
              duration={300}
              className="cursor-pointer hover:text-white transition-colors duration-150"
            >
              Contact
            </ScrollLink>
          </motion.div>
          <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Tinsae-Jembere-Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="relative overflow-hidden bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:via-indigo-500/30 hover:to-cyan-500/30 text-white px-4 py-2 rounded-md transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 font-medium">Download CV</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="mobile-menu-button text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-menu-2"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Added 'bg-black' to ensure it's fully opaque when open */}
        {/* You could also use 'bg-[#0c0f11]' if you want that specific dark color */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu fixed top-0 left-0 w-full h-full bg-black flex flex-col p-6 z-40 md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
          <button
            type="button"
            className="mobile-menu-close self-end text-white text-3xl p-2"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-x"
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6L18 18"></path>
            </svg>
          </button>
          <ul className="list-none p-0 mt-32 flex flex-col items-center gap-5 text-center">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                offset={-70}
                duration={300}
                onClick={handleLinkClick}
                className="cursor-pointer text-[#a0a0a0] text-3xl font-semibold hover:text-white transition-colors duration-150"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                offset={-70}
                duration={300}
                onClick={handleLinkClick}
                className="cursor-pointer text-[#a0a0a0] text-3xl font-semibold hover:text-white transition-colors duration-150"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                offset={-70}
                duration={300}
                onClick={handleLinkClick}
                className="cursor-pointer text-[#a0a0a0] text-3xl font-semibold hover:text-white transition-colors duration-150"
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-70}
                duration={300}
                onClick={handleLinkClick}
                className="cursor-pointer text-[#a0a0a0] text-3xl font-semibold hover:text-white transition-colors duration-150"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-70}
                duration={300}
                onClick={handleLinkClick}
                className="cursor-pointer text-[#a0a0a0] text-3xl font-semibold hover:text-white transition-colors duration-150"
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <button
                onClick={() => {
                  handleLinkClick();
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Tinsae-Jembere-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-[#a0a0a0]/20 hover:bg-[#a0a0a0]/30 text-white px-6 py-3 rounded-md transition-all duration-200 text-2xl font-semibold border border-[#a0a0a0]/50"
              >
                Download CV
              </button>
            </li>
          </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
