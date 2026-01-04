import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close mobile menu after click
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h2 className="nav-logo">Jonathan</h2>
                
                {/* Hamburger for mobile */}
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Nav links */}
                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li onClick={() => scrollToSection('hero')}>Home</li>
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <li onClick={() => scrollToSection('skills')}>Skills</li>
                    <li onClick={() => scrollToSection('projects')}>Projects</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;