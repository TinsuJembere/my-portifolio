import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TechItem from "../components/TechItem";
import portImage from "../images/portimage.jpg";

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
    <div className="bg-[#0c0f11] min-h-screen text-white  font-['Roboto'] antialiased" id="home">
      <Navbar />

      <main className="w-full min-h-screen h-full flex justify-center pb-10 pt-20">
        <div className="h-full w-full max-w-[47.7rem] mx-auto px-6">
          <section id="hero" className="flex flex-col md:flex-row md:items-start gap-10 text-center md:text-left pt-16 pb-20">
            <motion.div 
              className="relative w-44 h-44 min-w-44 min-h-44 rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-[#0c0f11] rounded-full">
                  <img
                    src={portImage}
                    width="170"
                    height="170"
                    alt="Avatar"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center md:items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h1 className="text-[#a0a0a0] font-bold text-[28px] md:text-[34px] tracking-[0.03em] relative">
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                >
                  Hey, I'm Tinsae.
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.15 }}
                >
                  I'm a{" "}
                </motion.span>
                <br className="block md:hidden"/> 
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.2 }}
                >
                  Fullstack Software Developer.
                </motion.span>
                <motion.div 
                  className="md:absolute md:right-0 md:bottom-1.5 md:whitespace-nowrap inline-block mt-4 md:mt-0 bg-green-600/20 text-green-600 text-sm px-3 py-1 rounded-full hover:bg-green-500/20 hover:text-green-500 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.25 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="p-1 mb-px mr-1.5 inline-block bg-green-600 rounded-full"></span>
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
                    <img
                      alt="icon"
                      loading="eager"
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
                    <img
                      alt="icon"
                      loading="eager"
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
            <motion.h2 
              className="font-bold text-lg tracking-widest text-white uppercase mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
            >
              Tech stack
            </motion.h2>
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
