import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center p-8 bg-[#050505] text-gray-500 border-t border-card-border">
            <p>&copy; {new Date().getFullYear()} Priyanshu Kumar Singh. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
