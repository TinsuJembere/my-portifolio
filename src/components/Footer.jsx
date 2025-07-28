import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#0c0f11]" id="contact">
      <div className="container mx-auto max-w-[47.7rem] py-4 border-t-1 border-[#a0a0a0] px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Copyright and Links */}
        <div className="text-center md:text-left text-white text-sm order-2 md:order-1 mt-4 md:mt-0">
          tinsaejembere4@gmail.com
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex justify-center md:justify-end items-center gap-4 order-1 md:order-2">
          <a
            href="https://t.me/I_surrender1920" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTelegram}
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
            href="https://www.linkedin.com/in/tinsae-jembere-8157642b9" 
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
            href="https://www.youtube.com/@TinsaeJembere" 
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
