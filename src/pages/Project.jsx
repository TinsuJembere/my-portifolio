import React from 'react';
import { motion } from 'framer-motion';

// Project data with image URLs
const projects = [
    {
        title: 'E-Shop Design',
        description: 'Modern UI for an e-commerce store',
        tech: 'Built with React',
        imageUrl: 'https://images.unsplash.com/photo-1523381668812-757278396189?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
        title: 'Portfolio Showcase',
        description: 'Tailored design for creatives',
        tech: 'Built with Vue.js',
        imageUrl: 'https://images.unsplash.com/photo-1611097217936-e5385575d785?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Replace with actual image URL
    },
    {
        title: 'Analytics Hub',
        description: 'Real-time data visualization',
        tech: 'Built with Angular',
        imageUrl: 'https://images.unsplash.com/photo-1587620962725-49037e0d769f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
        title: 'SaaS Landing',
        description: 'Simplified user onboarding',
        tech: 'Built with Next.js',
        imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
        title: 'Restaurant Site',
        description: 'Elegant food menu showcase',
        tech: 'Built with Bootstrap',
        imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
        title: 'Event Planner',
        description: 'Streamlined event scheduling',
        tech: 'Built with Laravel',
        imageUrl: 'https://images.unsplash.com/photo-1523995461836-7e3c988e27f2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
        title: 'Travel Blog',
        description: 'Immersive storytelling design',
        tech: 'Built with WordPress',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
        title: 'Fitness Portal',
        description: 'Engaging user experience',
        tech: 'Built with Django',
        imageUrl: 'https://images.unsplash.com/photo-1532635104-37771a9e2d96?q=80&w=3298&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
        title: 'Learning Platform',
        description: 'Interactive learning modules',
        tech: 'Built with Ruby on Rails',
        imageUrl: 'https://images.unsplash.com/photo-1505018008039-a1753155cc31?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
];

const MyProjects = () => {
    return (
        <section className="bg-white py-16 md:py-16" id='projects'>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-4"
                        >
                            <div className="relative rounded-md">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-40 rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gray-700 rounded-md bg-opacity-0 hover:bg-opacity-10 transition-colors duration-300 flex items-center justify-center">
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
                                <button variant="outline" className="w-full bg-transparent border border-indigo-500 text-indigo-500 hover:text-gray-700 hover:bg-indigo-500 rounded-md py-2 px-4 transition-colors duration-200">
                                    View Project
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyProjects;
