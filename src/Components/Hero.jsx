import React from 'react';

function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero" id="hero">
            <h1>Hi, I'm Jonathan</h1>
            <p>Frontend Developer | React Enthusiast</p>
            <button className="cta-button" onClick={scrollToContact}>
                Let's Work Together
            </button>
        </div>
    );
}

export default Hero;