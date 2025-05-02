import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white py-4 border-t-1 border-indigo-500">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Copyright and Links */}
        <div className="text-center md:text-left text-gray-600 text-sm order-2 md:order-1 mt-4 md:mt-0">
          © {new Date().getFullYear()} Brand, Inc. ·
          <a
            href="/privacy"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 ml-1"
          >
            Privacy
          </a>{" "}
          ·
          <a
            href="/terms"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 ml-1"
          >
            Terms
          </a>{" "}
          ·
          <a
            href="/sitemap"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 ml-1"
          >
            Sitemap
          </a>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex justify-center md:justify-end items-center gap-4 order-1 md:order-2">
          <a
            href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              className="text-blue-400 transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.facebook.com" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              className="text-blue-600 transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="text-blue-800 transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.youtube.com" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="lg"
              className="text-red-600 transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
