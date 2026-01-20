import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaPalette, FaTools } from 'react-icons/fa';

function Skills() {
    const skillCategories = [
        {
            category: "Frontend Development",
            icon: <FaReact />,
            skills: [
                { name: "React.js", level: 85 },
                { name: "JavaScript (ES6+)", level: 80 },
                { name: "HTML5 & CSS3", level: 90 },
                { name: "Responsive Design", level: 85 }
            ]
        },
        {
            category: "Backend Development",
            icon: <FaNodeJs />,
            skills: [
                { name: "Node.js", level: 70 },
                { name: "Express.js", level: 65 },
                { name: "RESTful APIs", level: 75 },
                { name: "Authentication", level: 70 }
            ]
        },
        {
            category: "Database & Tools",
            icon: <FaDatabase />,
            skills: [
                { name: "MongoDB", level: 70 },
                { name: "Git & GitHub", level: 85 },
                { name: "Vercel/Netlify", level: 80 },
                { name: "VS Code", level: 90 }
            ]
        },
        {
            category: "UI/UX & Design",
            icon: <FaPalette />,
            skills: [
                { name: "UI/UX Principles", level: 75 },
                { name: "Figma Basics", level: 60 },
                { name: "CSS Animations", level: 80 },
                { name: "Color Theory", level: 70 }
            ]
        }
    ];

    return (
        <div className="skills" id='skills'>
            <h2 data-aos="fade-up">My Skills</h2>
            <p className="skills-subtitle" data-aos="fade-up">Technologies I use to bring ideas to life</p>
            
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div 
                        key={index} 
                        className="skill-category-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="category-header">
                            <span className="category-icon">{category.icon}</span>
                            <h3>{category.category}</h3>
                        </div>
                        <div className="skills-list-detailed">
                            {category.skills.map((skill, i) => (
                                <div key={i} className="skill-item-detailed">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div 
                                            className="skill-progress" 
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
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