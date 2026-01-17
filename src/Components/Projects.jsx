// Projects.jsx
import React from 'react';
import aristo from '../assets/images/Aristo.png'
import moodify from '../assets/images/Moodify.png'
import knowThyself from '../assets/images/Know-Thyself.png'

function Projects() {
    const projects = [
        { 
          id: 1, 
          title: 'Aristo Education', 
          description: 'Led frontend development for an educational platform serving 1000+ students. Focused on accessibility, performance, and intuitive UX design.', 
          link: "https://aristoeducation.net/",
          image: aristo,
          tech: ['HTML', 'CSS', 'JavaScript']
        },
        { 
          id: 2,
          title: 'Moodify', 
          description: 'Built a mood-tracking web app to help users monitor emotional wellness. Features data visualization, local storage, and responsive design.', 
          link: "https://jonathannassif.github.io/Moodify/",
          image: moodify,
          tech: ['HTML', 'CSS', 'JavaScript']
        },
        { 
          id: 3,
          title: 'Know Thyself', 
          description: 'Developed an interactive self-assessment tool for personal growth. Implements dynamic logic, clean UI, and seamless user flow.',
          link: "https://jonathannassif.github.io/know-thyself/",
          image: knowThyself,
          tech: ['HTML', 'CSS', 'JavaScript']
        }
    ];

    return (
        <div className="projects" id='projects'>
            <div className="projects-header" data-aos="fade-up">
                <h2>My Projects</h2>
                <p className="projects-subtitle">
                    Real projects. Real impact. Real code.
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
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;