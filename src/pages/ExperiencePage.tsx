import React from 'react'; 

import '../App.css';

import ProjectCard from '../components/ProjectCard';

import projects from '../data/projects.json';

const ExperiencePage: React.FC = () => {

    return(
        <div>
            <h2>Work Experience</h2>

            <div className="TextBox">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div>
                        <p>
                            <b>Software Engineering Intern @ UKG</b><br/>
                            <i>
                                <a
                                    href="https://www.ukg.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: "white"}}
                                >
                                    Ultimate Kronos Group
                                </a>
                            </i><br/>
                            May 2024 - August 2024
                        </p>
                    </div>
                    <div>
                        <img src="images/UKG_rgb.jpg" alt="UKG Logo" width="275" height="100"/>
                    </div>
                </div>
                <p>
                    Contributed to advancing application security and development efficiency as part of the Identity
                    and Access Management (IAM) team. Focused on creating scalable solutions and robust testing
                    practices to support secure and reliable systems across the organization.
                </p>
                <ul>
                    <li>
                        Designed and implemented unit and integration tests to ensure code reliability and
                        coverage. These tests were integrated into the CI/CD pipeline, enabling automated testing
                        and deployment.
                    </li>
                    <li>
                        Collaborated with the Identity and Access Management (IAM) team to develop internal tools
                        and API endpoints, improving application security. These tools were used to manage access
                        tokens, permissions, and user roles.
                    </li>
                    <li>
                        Automated access token rotation tasks across development, staging, and production
                        environments. These tasks were previously performed manually, requiring significant time
                        and risk of human error.
                    </li>
                </ul>
            </div>


            <div className="TextBox">

                <p>
                    <b>Peer Tutor for Computer Science, Object-Oriented Programming, Organic Chemistry</b>
                    <br/>
                    <i>Student Academic Resource Center @ UCF</i>
                    <br/>
                    January 2022 - Present
                    <br/>
                    <br/>
                    <p>Provided comprehensive academic support to undergraduate students in Computer Science and Organic
                        Chemistry courses through one-on-one and group tutoring sessions.
                        Contributed to enhancing student understanding and academic performance in historically
                        challenging subjects.</p>
                    <ul>
                        <li>
                            Collaborated with course instructors to develop and prepare session materials, ensuring
                            alignment with course objectives and enhancing student learning outcomes.
                        </li>
                        <li>
                            Facilitated academic discussions and workshops, encouraging active learning, critical
                            thinking, and problem-solving among students.
                        </li>
                        <li>
                            Adapted to various learning environments by conducting in-person and online/hybrid tutoring
                            sessions,
                            addressing diverse student needs and preferences.
                        </li>
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

            <div className="breakPoint"></div>

        </div>
    )

};

export default ExperiencePage;