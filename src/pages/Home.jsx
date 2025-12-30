import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TechItem from "../components/TechItem";
import portImage from "../images/portimage.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Home() {
  const techStack = [
    { name: "React", icon: "/react-icon.svg" },
    { name: "Next JS", icon: "/next-icon.svg" },
    { name: "JavaScript", icon: "/javascript-icon.svg" },
    { name: "TypeScript", icon: "/typescript-icon.svg" },
    { name: "Tailwind", icon: "/tailwind-icon.svg" },
    { name: "HTML", icon: "/html-icon.svg" },
    { name: "CSS", icon: "/css-icon.svg" },
    { name: "FastAPI", icon: "/fastapi-icon.svg" },
  ];

  return (
    <div className="bg-[#0c0f11] text-white min-h-screen font-['Roboto'] antialiased" id="home">
      <Navbar />

      <main className="w-full min-h-screen h-full flex justify-center pb-10 pt-20">
        <div className="h-full w-full max-w-[47.7rem] mx-auto px-6">
          <section id="hero" className="flex flex-col md:flex-row md:items-start gap-10 text-center md:text-left pt-16 pb-20">
            <motion.div 
              className="relative w-44 h-44 min-w-44 min-h-44 rounded-full overflow-visible"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Rotating Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-full p-[3px]"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: "conic-gradient(from 0deg, #3b82f6, #6366f1, #06b6d4, #3b82f6)",
                }}
              >
                <div className="w-full h-full bg-[#0c0f11] rounded-full" />
              </motion.div>
              
              {/* Inner Glow Effect */}
              <motion.div
                className="relative w-44 h-44 min-w-44 min-h-44 rounded-full overflow-visible mx-auto md:mx-0"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile Image */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden z-10">
                <LazyLoadImage
                  src={portImage}
                  width="170"
                  height="170"
                  alt="Tinsae Jembere - Fullstack Software Developer"
                  effect="blur"
                  decoding="async"
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center md:items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h1 className="text-[#a0a0a0] font-bold text-[28px] md:text-[34px] lg:text-[40px] tracking-[0.03em] relative">
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Hey, I'm Tinsae.
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  I'm a{" "}
                </motion.span>
                <br className="block md:hidden"/> 
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Fullstack Software Developer.
                </motion.span>
                <motion.div 
                  className="md:absolute md:right-0 md:bottom-1.5 md:whitespace-nowrap inline-block mt-4 md:mt-0 bg-blue-600/20 text-blue-400 text-sm px-3 py-1 rounded-full hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.25 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="p-1 mb-px mr-1.5 inline-block bg-blue-500 rounded-full"></span>
                  Open to work
                </motion.div>
              </h1>
              <motion.div 
                className="w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <motion.a
                  target="_blank"
                  className="text-[#a0a0a0] whitespace-nowrap hover:text-white transition-colors duration-200"
                  href="https://www.google.com/maps/place/Addis+Ababa,+Ethiopia"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                >
                  🏠 Addis Ababa, Ethiopia.
                </motion.a>
                <div className="w-full md:w-auto flex items-center justify-center md:justify-end gap-5 text-base text-[#a0a0a0]">
                  <motion.a
                    target="_blank"
                    href="https://www.linkedin.com/in/tinsae-jembere-8157642b9"
                    className="flex items-center gap-1 hover:text-white transition-colors duration-200"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <LazyLoadImage
                      alt="icon"
                      effect="blur"
                      width="24"
                      height="24"
                      src="/linkedin-icon.svg"
                      decoding="async"
                    />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    target="_blank"
                    href="https://github.com/TinsuJembere"
                    className="flex items-center gap-1 hover:text-white transition-colors duration-200"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <LazyLoadImage
                      alt="icon"
                      effect="blur"
                      width="20"
                      height="20"
                      src="/github-icon.svg"
                      decoding="async"
                    />
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Tech Stack Section */}
          <motion.section 
            className="flex flex-col mt-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            style={{ willChange: 'transform, opacity' }}
          >
<<<<<<< HEAD
            <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        Tech Stacks
                      </motion.h2>
=======
            <motion.h2 
              className="font-bold text-lg tracking-widest text-white uppercase mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
            >
              Tech stack
            </motion.h2>
>>>>>>> a2bfdce92b6eca47e58cddaa5723073e43cd26d3
            <div className="overflow-hidden w-full relative">
              <motion.div
                className="flex gap-5"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
                style={{ willChange: 'transform' }}
              >
                {/* Render tech stack twice for seamless loop */}
                {[...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0"
                  >
                    <TechItem name={tech.name} icon={tech.icon} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}

export default Home;
