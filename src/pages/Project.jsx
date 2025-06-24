import React from 'react';
import { motion } from 'framer-motion';

// Project data with image URLs
const projects = [
    {
        title: 'SliceCraft',
        description: 'Custom Pizza Builder App',
        url: 'https://slice-craft-8rszt7sn9-tinsaes-projects-7b3f74ab.vercel.app/  ',
        imageUrl: '/slicecraft.jpg', // Replace with actual image URL
    },
    {
        title: 'SheLearns',
        description: "Women's Tech Learning Platform",
        url: " https://she-learns.vercel.app/",
        imageUrl: '/shelearns.jpg',  // Replace with actual image URL
    },
    {
        title: 'ShopSmart',
        description: 'modern e-commerce web application',
        url: 'https://shopsmart-ecommerce.vercel.app/',
        imageUrl: '/shopsmart.jpg', // Replace with actual image URL
    },
    {
        title: 'BookStore',
        description: ' full-stack Book Store application',
        url: 'https://book-store-rouge-nine.vercel.app',
        imageUrl: '/bookstore.jpg', // Replace with actual image URL
    },
    {
        title: 'Food Receipe App',
        description: 'food receipe web app',
        url: 'https://food-recipe-app-liart.vercel.app/',
        imageUrl: '/foodrecipe.jpg', // Replace with actual image URL
    },
    {
        title: 'Food Receipe App',
        description: 'food receipe web app',
        url: 'https://tinsujembere.github.io/weatherApp/',
        imageUrl: '/weather.jpg', // Replace with actual image URL
    }
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
                                
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <a href={project.url}><button variant="outline" className="w-full bg-transparent border border-indigo-500 text-indigo-500 hover:text-gray-700 hover:bg-indigo-500 rounded-md py-2 px-4 transition-colors duration-200">
                                    View Project
                                </button></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyProjects;
