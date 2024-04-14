import React from 'react';

import '../App.css';

const HomePage: React.FC = () => {

    return(
        <div>
            <h2>Social Media</h2>
            <div className="SocialMedia">

                <a href="https://github.com/NickAwrist" target="_blank" rel="noreferrer">
                <img className="icon_img" src="github_logo.png" alt="Link to Github"/>
                </a>

                <a href="https://www.linkedin.com/in/nicholas-aristizabal-56ba6b235/" target="_blank" rel="noreferrer">
                <img className="icon_img" src="linkedin_logo.png" alt="Link to Linkedin"/>
                </a>

            </div>

            <div className="breakPoint"></div>

            <h2>About Me</h2>
            <div className="TextBox">
                <p>
                I am a student at the University of Central Florida with a passion for creating software projects and solving problems. I have experience with
                full-stack development, and I am always eager to learn new technologies and frameworks. I am currently
                looking for new opportunities to grow and develop my skills.
                </p>
            </div>

            <div className="breakPoint"></div>

            <h2>Education</h2>
            <div className="TextBox">
                <p>
                University of Central Florida
                <img src="ucf_icon.png" alt="UCF Logo" style={{width: '30px', height: '30px'}} />

                <br />
                Bachelor of Science in Computer Science
                <br />
                Expected Graduation: May 2025
                <br />
                GPA: 3.65
                </p>
                <p>
                Relavant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Software Engineering, Discrete Mathematics, Computer Organization
                </p>
            </div>

            <div className="breakPoint"></div>

            <h2>Technical Skills</h2> 
            <div className="Skills"> 

                <div className="Skill">
                    <h2 className="SkillHeader">Frameworks</h2>
                    <ul>
                        <li>ReactJS</li>
                        <li>React Native</li>
                        <li>NodeJS</li>
                        <li>DiscordJS</li>
                    </ul>
                </div>
            

                <div className="Skill">
                    <h2 className="SkillHeader">Languages</h2>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>JavaScript/TypeScript</li>
                        <li>Rust</li>
                    </ul>
                </div>

                <div className="Skill">
                    <h2 className="SkillHeader">Tools</h2>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Linux</li>
                        <li>VSCode</li>
                        <li>Postman</li>
                        <li>SwaggerHub</li>
                        <li>IntelliJ</li>
                    </ul>
                </div>

                <div className="Skill">
                    <h2 className="SkillHeader">Skills</h2>
                    <ul>
                        <li>Team-Oriented</li>
                        <li>Fast Learner</li>
                        <li>Critical Thinking</li>
                        <li>Problem-Solving</li>
                        <li>Adaptability</li>
                    </ul>
                </div>
            
            </div>

            <div className="breakPoint"></div>

            

        </div>
        
    )

}

export default HomePage;