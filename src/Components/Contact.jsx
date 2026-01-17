// Contact.jsx
import React from 'react';

function Contact() {
    return (
        <div className="contact" id='contact' data-aos="fade-up">
            <div className="contact-content">
                <h2>Let's Build Something Great</h2>
                <p className="contact-description">
                    Whether you're looking to build something new or improve what exists, 
                    I'd love to hear from you. Let's turn your vision into reality.
                </p>
                <div className="contact-links">
                    <a href="mailto:jonas2000288@gmail.com" className="contact-link">
                        <span className="link-icon">✉</span>
                        Email
                    </a>
                    <a href="https://github.com/jonathannassif" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <span className="link-icon">⚡</span>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-nassif/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <span className="link-icon">💼</span>
                        LinkedIn
                    </a>
                </div>
                <p className="contact-footer">Open for freelance projects, full-time roles, and collaboration</p>
            </div>
        </div>
    );
}

export default Contact;