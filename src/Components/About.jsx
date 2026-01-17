import React from 'react';

function About() {
    return (
        <div className="about" id='about' data-aos="fade-up">
            <h2>About Me</h2>
            <div className="about-content">
                <p className="about-intro">
                    I'm a <span className="highlight">Full-Stack Developer</span> who builds 
                    websites that do more than look good—they convert visitors into clients.
                </p>
                
                <p className="about-details">
                    With 1 year of hands-on experience in React, Node.js, and modern web tech, 
                    I craft digital experiences that actually drive results for your brand.
                </p>

                <p className="about-details">
                    When I'm not coding? I'm writing about mental health, self-improvement, 
                    and life's big questions. 
                </p>
                
                <p className="about-cta">
                    Let's build something <span className="highlight">great</span> together.
                </p>
            </div>
        </div>
    );
}

export default About;