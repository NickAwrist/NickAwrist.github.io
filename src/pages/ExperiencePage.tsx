import React from 'react'; 

import '../App.css';

import ProjectCard from '../components/ProjectCard';

import projects from '../data/projects.json';

const ExperiencePage: React.FC = () => {

    return(
        <div>
            <h2>Work Experience</h2>
            <div className="TextBox">
                <p>
                <b>Peer Tutor for Computer Science, Object-Oriented Programming, Organic Chemistry</b>
                <br />
                <i>Student Academic Resource Center @ UCF</i>
                <br />
                January 2022 - Present
                <br />
                <br />
                <p>Provided comprehensive academic support to undergraduate students in Computer Science and Organic Chemistry courses through one-on-one and group tutoring sessions. 
                    Contributed to enhancing student understanding and academic performance in historically challenging subjects.</p>
                <ul>
                    <li>Collaborated with course instructors to develop and prepare session materials, ensuring alignment with course objectives and enhancing student learning outcomes.</li>
                    <li>Facilitated academic discussions and workshops, encouraging active learning, critical thinking, and problem-solving among students.</li>
                    <li>Adapted to various learning environments by conducting in-person and online/hybrid tutoring sessions, addressing diverse student needs and preferences.</li>
                </ul>
                </p>
            </div>

            <div className="breakPoint"></div>

            <h2>Projects</h2>
            <div className="ProjectsContainer">
                {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                />
                ))}
            </div>
        </div>
    )

};

export default ExperiencePage;