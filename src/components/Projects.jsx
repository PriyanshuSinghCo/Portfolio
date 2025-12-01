import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, cart management, and payment gateway integration.',
        tags: ['React',"Supabase"],
        link: 'https://gulchu-ketchup.vercel.app',
        github: '#'
    },
    {
        title: 'Hospital Management App',
        description: 'A real-time task management application using Next.js and Firebase. Supports drag-and-drop, team collaboration, and real-time updates.',
        tags: ['React.js', 'Supabase', 'Tailwind'],
        link: 'https://www.drabhishekramadhin.com',
        github: '#'
    },
    {
        title: 'Sanskaraa Website',
        description: 'An analytics dashboard for social media accounts. Visualizes data using Chart.js and fetches real-time metrics via APIs.',
        tags: ['React', 'Chart.js', 'API'],
        link: 'https://www.sanskaraa.co.in',
        github: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="pb-24 px-8">
            <h2>Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-card-bg border border-card-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary-color"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl mb-4 text-white font-bold">{project.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="bg-white/10 text-primary-color px-3 py-1 rounded-full text-sm">{tag}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href={project.link} className="px-4 py-2 bg-primary-color text-black rounded-md font-bold text-sm hover:opacity-80 transition-opacity">Live Demo</a>
                                <a href={project.github} className="px-4 py-2 bg-transparent border border-primary-color text-primary-color rounded-md font-bold text-sm hover:bg-primary-color hover:text-black transition-colors">GitHub</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
