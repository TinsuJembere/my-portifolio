import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        <img
          src="/219508067-removebg-preview.png"
          alt="Logo"
          className="w-32 h-auto"
        />

        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active-link"
            className="cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active-link"
            className="cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active-link"
            className="cursor-pointer"
          >
            Projects
          </ScrollLink>
        </ul>
      </div>

      <div className="flex space-x-3">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center px-4 py-2 border border-indigo-500 text-indigo-600 rounded-md text-sm hover:bg-indigo-50">
            Download CV
          </button>
        </a>
        <ScrollLink
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <button className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md text-sm hover:bg-indigo-600">
            Contact Me
          </button>
        </ScrollLink>
      </div>
    </nav>
  );
}

export default Navbar;
