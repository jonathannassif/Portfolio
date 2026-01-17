// Hero.jsx
import React from 'react';

function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero" id="hero">
            <div className="hero-content">
                <h1>
                    Hi, I'm <span className="name-highlight">Jonathan Joseph</span>
                </h1>
                <p className="hero-subtitle">Full-Stack Developer</p>
                <p className="hero-tagline">Turning Ideas Into Digital Reality</p>
                <button className="cta-button" onClick={scrollToContact}>
                    Let's Work Together
                </button>
            </div>
        </div>
    );
}

export default Hero;