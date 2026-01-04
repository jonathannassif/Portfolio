import React from 'react';
import aristo from '../assets/images/Aristo.png'
import moodify from '../assets/images/Moodify.png'
import knowThyself from '../assets/images/Know-Thyself.png'

function Projects() {

    const projects = [
        { id: 1, 
          title: 'Aristo Education', 
          description: 'ARISTO DREAM LEARN INNOVATE YOUR DOOR TO THE FUTURE' , 
          link: "https://aristoeducation.net/",
          image: aristo   },
        { id: 2,
          title: 'Moodify', 
          description: 'Task management app', 
          link: "https://jonathannassif.github.io/Moodify/" ,
          image: moodify},
        { id: 3,
          title: 'Know-Thyself', 
          description: 'This website you\'re viewing!',
          link: "https://jonathannassif.github.io/know-thyself/",
          image: knowThyself }
    ];


    return (
        <div className="projects" id='projects'>
            <h2 data-aos="fade-up">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={project.id} 
                    className="project-card" 
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}>
                        <div className='project-image'>
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                         <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project →
                         </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;