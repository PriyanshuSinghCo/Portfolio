import React from 'react';
import { motion } from 'framer-motion';
import MouseEffect from './MouseEffect';
import profileImage from '../assets/Priyanshu.jpeg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex justify-center items-center text-center relative overflow-hidden pt-20 py-20">
            <MouseEffect />
            <div className="max-w-[1200px] p-8 z-10 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 md:gap-24">
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left max-w-[600px]">
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl mb-4 leading-tight font-bold text-white"
                        >
                            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-color to-accent-color">Priyanshu</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xl md:text-3xl text-secondary-color mb-6 font-normal"
                        >
                            Fullstack Developer
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-base md:text-lg text-gray-400 mb-8"
                        >
                            I deliver cutting-edge <span className="text-primary-color font-semibold">websites</span> (all types) and <span className="text-primary-color font-semibold">mobile applications</span> using the latest technologies.
                            Specializing in React.js, Next.js, Node.js, React Native, and modern full-stack development.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="flex flex-wrap justify-center md:justify-start gap-4"
                        >
                            <a href="#projects" className="btn">View My Work</a>
                            <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-primary-color text-primary-color rounded-md font-bold hover:bg-primary-color hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40">Contact Me</a>
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-shrink-0"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-color to-accent-color rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
                            <img
                                src={profileImage}
                                alt="Priyanshu Kumar Singh"
                                className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl object-cover object-top border-4 border-primary-color shadow-2xl shadow-primary-color/50"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
