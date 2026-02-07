import React from 'react';
import aristo from '../assets/images/Aristo.png'
import moodify from '../assets/images/Moodify.png'
import knowThyself from '../assets/images/Know-Thyself.png'
import manish from '../assets/images/Manisshh.png'

function Projects() {
   const projects = [
    { 
      id: 1, 
      title: 'Aristo Education Platform', 
      client: 'Educational Institution',
      challenge: 'Needed a professional online presence to attract students and showcase programs.',
      solution: 'Built a modern, accessible platform with clear CTAs and course information.',
      result: '1000+ students engaged, improved enrollment inquiries',
      link: "https://aristoeducation.net/",
      image: aristo,
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    { 
      id: 2,
      title: 'Growth Landing Page', 
      client: 'Creator Economy / Marketing',
      challenge: 'Creators needed a high-converting landing page to turn followers into clients.',
      solution: 'Designed a modern landing page with bold visuals, 3D elements, and clear CTAs.',
      result: 'Premium design, smooth animations, mobile-responsive',
      link: "https://growth-landing-page-lime.vercel.app/",
      image: manish,
      tech: ['React', 'CSS3', 'React Icons']
    },
    { 
      id: 3,
      title: 'Moodify - Wellness Tracker', 
      client: 'Personal Project / Showcase',
      challenge: 'Users needed an intuitive way to track mental wellness daily.',
      solution: 'Created an interactive mood-tracking app with data visualization and streak tracking.',
      result: 'Clean UX, responsive design, local data management',
      link: "https://moodify-react.vercel.app/",
      image: moodify,
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    { 
      id: 4,
      title: 'Know Thyself - Self-Assessment Tool', 
      client: 'Personal Development Niche',
      challenge: 'Needed an engaging platform for personal growth assessment.',
      solution: 'Developed interactive assessment with dynamic logic and personalized results.',
      result: 'Seamless user flow, minimalist design, high engagement',
      link: "https://know-thyself-react.vercel.app/",
      image: knowThyself,
      tech: ['HTML', 'CSS', 'JavaScript']
    }
];

    return (
        <div className="projects" id='projects'>
            <div className="projects-header" data-aos="fade-up">
                <h2>Client Work</h2>
                <p className="projects-subtitle">
                    Real projects. Real results. Real impact.
                </p>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className="project-card" 
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <div className='project-image'>
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="view-live"
                                >
                                    View Live →
                                </a>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-client">{project.client}</div>
                            <h3>{project.title}</h3>
                            
                            <div className="project-case-study">
                                <div className="case-item">
                                    <strong>Challenge:</strong> {project.challenge}
                                </div>
                                <div className="case-item">
                                    <strong>Solution:</strong> {project.solution}
                                </div>
                                <div className="case-item result">
                                    <strong>Result:</strong> {project.result}
                                </div>
                            </div>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA after projects */}
            <div className="projects-cta" data-aos="fade-up">
                <h3>Ready to get results like these?</h3>
                <button 
                    className="cta-button primary"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                    Let's Talk About Your Project
                </button>
            </div>
        </div>
    );
}

export default Projects;