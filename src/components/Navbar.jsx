import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu on link click
  };

  return (
    // Removed bg-opacity-90 and backdrop-blur-sm from the header
    <header className="fixed w-full z-50 bg-[#0c0f11] pt-5 pb-10">
      <nav className="container mx-auto max-w-[47.7rem] px-6 flex items-center justify-between">
        {/* Site Title */}
        <ScrollLink
          to="home"
          smooth={true}
          offset={-70} // Adjust offset if your fixed header height changes
          duration={500}
          className="cursor-pointer font-bold text-lg tracking-widest text-[#a0a0a0] uppercase hover:text-white transition-colors duration-200"
        >
          Tinsae Jembere
        </ScrollLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-lg text-[#a0a0a0]">
          <ScrollLink
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-white transition-colors duration-200"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-white transition-colors duration-200"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-white transition-colors duration-200"
          >
            Contact
          </ScrollLink>
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
        <div
          className={`mobile-menu fixed top-0 left-0 w-full h-full bg-black flex flex-col p-6 transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
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
                to="work-experience"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
                className="cursor-pointer text-[#a0a0a0] text-3xl font-semibold hover:text-white transition-colors duration-200"
              >
                Work Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
                className="cursor-pointer text-[#a0a0a0] text-3xl font-semibold hover:text-white transition-colors duration-200"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
                className="cursor-pointer text-[#a0a0a0] text-3xl font-semibold hover:text-white transition-colors duration-200"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
