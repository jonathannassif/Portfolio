import React from 'react';

function Results() {
    const stats = [
        { number: "15+", label: "Projects Delivered" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "3x", label: "Average Conversion Increase" },
        { number: "48hr", label: "Average Turnaround" }
    ];

    const benefits = [
        {
            icon: "🎯",
            title: "Conversion-Focused Design",
            description: "Every pixel is designed to turn visitors into customers. No generic templates."
        },
        {
            icon: "⚡",
            title: "Fast Delivery",
            description: "Get your landing page live in days, not weeks. Quality without the wait."
        },
        {
            icon: "💰",
            title: "ROI-Driven",
            description: "Your investment should make you money. I build pages that pay for themselves."
        },
        {
            icon: "🔧",
            title: "Ongoing Support",
            description: "Need changes? I've got you covered. Your success is my success."
        }
    ];

    return (
        <div className="results" id="results">
            {/* Stats Section */}
            <div className="stats-section" data-aos="fade-up">
                <h2>Results That Speak</h2>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                            <h3 className="stat-number">{stat.number}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="benefits-section" data-aos="fade-up">
                <h2>Why Work With Me?</h2>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Results;