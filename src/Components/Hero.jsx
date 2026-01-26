import React from 'react';

function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero" id="hero">
            <div className="hero-content">
                <p className="hero-label">Web Developer & Designer</p>
                <h1>
                    I Build Landing Pages That Turn Your <span className="name-highlight">Followers</span> Into <span className="name-highlight">Paying Clients</span>
                </h1>
                <p className="hero-tagline">
                    Custom websites designed to convert. No templates. No fluff. Just results.
                </p>
                <div className="hero-buttons">
                    <button className="cta-button primary" onClick={scrollToContact}>
                        Book a Free Call
                    </button>
                    <button className="cta-button secondary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                        See My Work
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;