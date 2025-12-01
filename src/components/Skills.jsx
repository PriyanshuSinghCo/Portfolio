import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiExpress, SiPostgresql } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TbBrandReactNative } from 'react-icons/tb';

const skillsData = [
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB', level: 90 },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', level: 80 },
    { name: 'React-Native', icon: <TbBrandReactNative />, color: '##61DAFB', level: 60 },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', level: 80 },
    { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', level: 90 },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 90 },
    { name: 'SQL', icon: <SiPostgresql />, color: '#336791', level: 70 }, // Using Postgres icon for generic SQL or I could use FaDatabase
];

const Skills = () => {
    return (
        <section id="skills" className="bg-[#0f0f0f] py-20 px-8">
            <h2>My Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-card-bg border border-card-border rounded-xl p-8 text-center transition-colors duration-300 hover:border-primary-color hover:bg-white/10"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-5xl mb-4 flex justify-center" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <p className="text-xl font-medium text-gray-300 mb-4">{skill.name}</p>

                        {/* Skill Graph / Progress Bar */}
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2 overflow-hidden">
                            <motion.div
                                className="h-2.5 rounded-full"
                                style={{ backgroundColor: skill.color }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                viewport={{ once: true }}
                            ></motion.div>
                        </div>
                        <div className="text-right text-sm text-gray-400">{skill.level}%</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
