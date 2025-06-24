import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="bg-white py-2 px-6 font-sans" id='about'>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              className="text-gray-600 leading-relaxed"
            >
              I'm a passionate software developer with over a decade of experience in crafting innovative solutions for clients worldwide.
            </motion.p>

            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-black">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">My journey began with a fascination for coding, which grew into a full-fledged career in the tech industry.</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-black">Customer-Centric</h3>
                <p className="text-gray-600 leading-relaxed">I've worked with companies ranging from startups to Fortune 500 firms, always striving to deliver exceptional results tailored to their needs.</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-black">Expertise</h3>
                <p className="text-gray-600 leading-relaxed">Over the years, I've honed my skills in web development, mobile app creation, and cloud technologies, always staying ahead of industry trends.</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-black">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">Transparency and honesty are the cornerstones of my approach, ensuring clients feel connected and confident throughout the development process.</p>
              </div>
            </div>
          </div>

           <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
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
