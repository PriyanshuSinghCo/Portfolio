import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1200px] h-20 z-50">
      <div className="bg-opacity-90 bg-[#0a0a0a] h-full flex justify-between items-center px-8 rounded-2xl backdrop-blur-md border border-card-border shadow-2xl shadow-primary-color/20 hover:shadow-primary-color/30 transition-shadow duration-300">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-color to-secondary-color">Priyanshu.dev</a>
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`md:flex md:items-center md:static absolute top-20 left-0 w-full md:w-auto md:bg-transparent bg-bg-color transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="md:ml-8 text-center md:my-0 my-8">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-primary-color transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
