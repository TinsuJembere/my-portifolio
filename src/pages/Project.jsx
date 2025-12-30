import React from "react";
import { motion } from "framer-motion";
import gebeyaImage from "../images/11157.jpg";

// Project data with image URLs
const projects = [
  {
    title: "SliceCraft",
    description: "Custom Pizza Builder App",
    url: "https://slice-craft-8rszt7sn9-tinsaes-projects-7b3f74ab.vercel.app/  ",
    imageUrl: "/slicecraft.jpg", // Replace with actual image URL
  },
  {
    title: "GebeyaAlert",
    description: " A full-stack web application that helps farmers track crop prices across different markets and receive alerts when prices reach their target goals.",
    url: "https://gebeya-alert.vercel.app/",
    imageUrl: gebeyaImage,
  },
  {
    title: "SheLearns",
    description: "Women's Tech Learning Platform",
    url: " https://she-learns.vercel.app/",
    imageUrl: "/shelearns.jpg", // Replace with actual image URL
  },
  {
    title: "ShopSmart",
    description: "modern e-commerce web application",
    url: "https://shopsmart-ecommerce.vercel.app/",
    imageUrl: "/shopsmart.jpg", // Replace with actual image URL
  },
  {
    title: "Workshop Booking System",
    description: "full-stack web application for managing and booking workshops",
    url: "https://workshop-booking-system.vercel.app/",
    imageUrl: "/workshop.jpg", // Replace with actual image URL
  },
  {
    title: "Employe Manager App",
    description: "employee management system with user authentication and newsletter subscription functionality",
    url: " https://employee-manager-beryl.vercel.app/",
    imageUrl: "/employee.jpg", // Replace with actual image URL
  },
];

const MyProjects = () => {
  return (
    <section className="bg-[#0c0f11] text-white py-16 md:py-16" id="projects">
      <div className="container mx-auto max-w-[47.7rem] px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="rounded-lg shadow-md overflow-hidden flex flex-col p-4 border border-[#a0a0a0]/20 hover:border-[#a0a0a0]/50 transition-all duration-200"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="relative rounded-md overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 rounded-md object-cover transition-transform duration-200 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    variant="outline"
                    className="w-full bg-transparent border text-gray-300 hover:text-white hover:bg-[#a0a0a0]/20 border-[#a0a0a0] rounded-md py-2 px-4 transition-colors duration-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    View Project
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
