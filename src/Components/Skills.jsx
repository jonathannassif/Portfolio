import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiVercel } from 'react-icons/si';

function Skills() {
    const skillCategories = [
        {
            category: "Frontend Development",
            icon: <FaReact />,
            skills: [
                { name: "React.js", icon: <FaReact /> },
                { name: "JavaScript (ES6+)", icon: <FaJs /> },
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3Alt /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> }
            ]
        },
        {
            category: "Backend Development",
            icon: <FaNodeJs />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "RESTful APIs", icon: <FaNodeJs /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ]
        },
        {
            category: "Tools & Deployment",
            icon: <FaGitAlt />,
            skills: [
                { name: "Git & GitHub", icon: <FaGitAlt /> },
                { name: "Vercel", icon: <SiVercel /> },
                { name: "Responsive Design", icon: <FaReact /> },
                { name: "VS Code", icon: <FaReact /> }
            ]
        }
    ];

    return (
        <div className="skills" id='skills'>
            <h2 data-aos="fade-up">Technologies I Use</h2>
            <p className="skills-subtitle" data-aos="fade-up">Building modern web experiences with proven tools</p>
            
            <div className="skills-grid-simple">
                {skillCategories.map((category, index) => (
                    <div 
                        key={index} 
                        className="skill-category-simple"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="category-header">
                            <span className="category-icon">{category.icon}</span>
                            <h3>{category.category}</h3>
                        </div>
                        <div className="skills-list-simple">
                            {category.skills.map((skill, i) => (
                                <div key={i} className="skill-badge">
                                    <span className="skill-badge-icon">{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;