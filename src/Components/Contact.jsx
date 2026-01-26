import React from 'react';

function Contact() {
    // Replace with YOUR Calendly link
    const calendlyLink = "https://calendly.com/jonathannassif/30min";

    return (
        <div className="contact" id='contact' data-aos="fade-up">
            <div className="contact-content">
                <h2>Let's Work Together</h2>
                <p className="contact-description">
                    Ready to turn your followers into paying clients? Book a free 30-minute 
                    strategy call and let's discuss how I can help grow your business.
                </p>

                {/* Primary CTA - Calendly */}
                <div className="contact-primary">
                    <a 
                        href="https://calendly.com/jonas2000288/10min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="calendly-button"
                    >
                        📅 Book Your Free Strategy Call
                    </a>
                    <p className="contact-subtext">No commitment. Just a conversation.</p>
                </div>

                {/* Divider */}
                <div className="contact-divider">
                    <span>or reach out directly</span>
                </div>

                {/* Secondary Contact Options */}
                <div className="contact-links">
                    <a href="mailto:jonas2000288@gmail.com" className="contact-link">
                        <span className="link-icon">✉</span>
                        Email
                    </a>
                    <a href="https://x.com/jonathannassiff" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <span className="link-icon">𝕏</span>
                        X (Twitter)
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-nassif/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <span className="link-icon">💼</span>
                        LinkedIn
                    </a>
                </div>

                <p className="contact-footer">
                    ✨ Available for landing page projects • Web development • Brand websites
                </p>
            </div>
        </div>
    );
}

export default Contact;