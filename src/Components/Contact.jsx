import React from 'react';
import { track } from '@vercel/analytics';

function Contact() {
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
                        href="https://calendly.com/jonas2000288/10min?source=results" 
                        onClick={() => track('calendly_click', { portfolio: 'results' })}
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
                    <a 
                        href="mailto:jonas2000288@gmail.com"  
                        onClick={() => track('email_click', { portfolio: 'results' })}
                        className="contact-link"
                    >
                        <span className="link-icon">✉</span>
                        Email
                    </a>
                    <a 
                        href="https://x.com/jonathannassiff"  
                        onClick={() => track('social_click', { platform: 'twitter', portfolio: 'results' })}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link"
                    >
                        <span className="link-icon">𝕏</span>
                        X (Twitter)
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/jonathan-nassif/" 
                        onClick={() => track('social_click', { platform: 'linkedin', portfolio: 'results' })}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link"
                    >
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