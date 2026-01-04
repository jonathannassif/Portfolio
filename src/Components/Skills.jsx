import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';

function Skills() {
      const skills = [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Git', icon: <FaGitAlt /> }
    ];


    return (
        <div className="skills" id='skills'>
            <h2 data-aos="fade-up">My Skills</h2>
            <div className="skills-list" data-aos="fade-up" data-aos-delay="200">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <span className= "skill-icon">{skill.icon}</span>
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;