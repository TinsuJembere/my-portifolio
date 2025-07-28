import React from 'react';
import { motion } from 'framer-motion';

const SocialMedia = () => {
    return (
        <section className="bg-[#0c0f11] text-white py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Follow me on social media
                    </h2>
                    <div className="flex justify-center items-center gap-6">
                        <a
                            href="https://www.facebook.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f text-blue-600 hover:text-blue-600 text-2xl transition-colors duration-300"></i>
                        </a>
                        <a
                            href="https://twitter.com"  
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                           <i className="fab fa-twitter text-blue-600 hover:text-blue-400 text-2xl transition-colors duration-300"></i>
                        </a>
                        <a
                            href="https://www.instagram.com"  
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram text-blue-600 hover:text-pink-500 text-2xl transition-colors duration-300"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in text-blue-600 hover:text-blue-800 text-2xl transition-colors duration-300"></i>
                        </a>
                        <a
                            href="https://www.youtube.com"    
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                           <i className="fab fa-youtube text-blue-600 hover:text-red-600 text-2xl transition-colors duration-300"></i>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialMedia;
