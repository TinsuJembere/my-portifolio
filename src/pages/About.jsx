import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="bg-white py-2 px-6 font-sans" id="about">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Column 1 */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
              className="text-gray-600 leading-relaxed"
            >
              I'm a Full-Stack Web Developer with experience building modern, responsive web applications from front to back. I work with technologies like JavaScript, TypeScript, React, Node.js, Express, MongoDB, and SQL.
              <br /><br />
              I enjoy creating clean, user-friendly interfaces and writing efficient, scalable backend code. I’m comfortable working across the full development stack—from designing APIs to deploying applications.
              <br /><br />
              I'm passionate about clean code, learning new technologies, and building products that solve real problems. Outside of coding, I enjoy music and taking long walks to clear my mind and spark creativity.
            </motion.p>
          </div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/image.png"
              alt="About Me"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
