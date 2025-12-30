import React from "react";
import { motion } from "framer-motion";
import gebeyaImage from "/11157.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import slicecraftImg from "/slicecraft.jpg";
import shelearnsImg from "/shelearns.jpg";
import shopsmartImg from "/shopsmart.jpg";
import workshopImg from "/workshop.jpg";
import employeeImg from "/employee.jpg";

// Project data with image URLs
const projects = [
  {
    title: "SliceCraft",
    description: "Custom Pizza Builder App",
    url: "https://slice-craft-8rszt7sn9-tinsaes-projects-7b3f74ab.vercel.app/  ",
    imageUrl: slicecraftImg,
    tech: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "GebeyaAlert",
    description:
      "A full-stack web application that helps farmers track crop prices across different markets and receive alerts when prices reach their target goals.",
    url: "https://gebeya-alert.vercel.app/",
    imageUrl: gebeyaImage,
    tech: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    title: "SheLearns",
    description: "Women's Tech Learning Platform",
    url: " https://she-learns.vercel.app/",
    imageUrl: shelearnsImg,
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "ShopSmart",
    description: "Modern e-commerce web application",
    url: "https://shopsmart-ecommerce.vercel.app/",
    imageUrl: shopsmartImg,
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Workshop Booking System",
    description:
      "Full-stack web application for managing and booking workshops",
    url: "https://workshop-booking-system.vercel.app/",
    imageUrl: workshopImg,
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "Employee Manager App",
    description:
      "Employee management system with user authentication and newsletter subscription functionality",
    url: " https://employee-manager-beryl.vercel.app/",
    imageUrl: "/employee.jpg",
    tech: ["React", "Node.js", "MySQL"],
  },
];

const MyProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      className="bg-[#0c0f11] text-white py-10 md:py-10 relative"
      id="projects"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          style={{ willChange: "transform, opacity" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-[47.7rem] px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ willChange: "transform, opacity" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            style={{ willChange: "transform, opacity" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ willChange: "transform, opacity" }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              style={{ willChange: "transform, opacity" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                style={{ willChange: "transform, opacity" }}
                viewport={{ once: true, margin: "-100px" }}
              />

              {/* Card */}
              <div className="relative h-full flex flex-col border border-[#a0a0a0]/20 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1f24]/80 to-[#0c0f11]/80 backdrop-blur-sm group-hover:border-[#a0a0a0]/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <LazyLoadImage
                    src={project.imageUrl}
                    alt={project.title}
                    effect="blur"
                    decoding="async"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f11] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Tech Tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-black/70 backdrop-blur-sm text-xs text-white rounded-md border border-white/20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + techIndex * 0.1,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-indigo-400 group-hover:to-cyan-400 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-[#a0a0a0] text-sm leading-relaxed mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 border border-blue-500/30 text-white rounded-lg py-3 px-4 font-medium hover:from-blue-500/30 hover:via-indigo-500/30 hover:to-cyan-500/30 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <span>View Project</span>
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </motion.svg>
                    </motion.button>
                  </motion.a>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ willChange: "transform, opacity" }}
                  viewport={{ once: true, margin: "-100px" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;
