import React from 'react';

import '../App.css';

const AboutMePage: React.FC = () => {

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
                full-stack development and I am always eager to learn new technologies and frameworks. I currently am
                a tutor at the Student Academic Resource Center @ UCF and a Software Engineer Intern at Ultimate Kronos Group (UKG) for their Summer 2024 internship program. 
                I am looking for future opportunities in Software Development to grow and develop my skills.
                </p>
            </div>

            <div className="breakPoint"></div>

            <h2>Education</h2>
            <div className="TextBox">
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                    <img src="ucf_icon.png" alt="UCF Logo" style={{width: '40px', height: '40px', marginRight: '15px'}} />
                    <h3 style={{margin: 0, color: 'var(--accent-color)'}}>University of Central Florida</h3>
                </div>
                <p style={{marginBottom: '5px'}}><strong>Bachelor of Science in Computer Science</strong></p>
                <p style={{marginBottom: '5px'}}>Expected Graduation: May 2025</p>
                <p style={{marginBottom: '15px'}}>GPA: 3.65</p>
                <p>
                <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Object-Oriented Programming, Software Engineering, Discrete Mathematics, Computer Organization
                </p>
            </div>

            <div className="breakPoint"></div>

            <h2>Technical Skills</h2> 
            <div className="Skills"> 
                <div className="SkillCard">
                    <h3 className="SkillHeader">Frameworks</h3>
                    <div className="SkillTags">
                        <span className="SkillTag">ReactJS</span>
                        <span className="SkillTag">React Native</span>
                        <span className="SkillTag">NodeJS</span>
                        <span className="SkillTag">DiscordJS</span>
                    </div>
                </div>
            
                <div className="SkillCard">
                    <h3 className="SkillHeader">Languages</h3>
                    <div className="SkillTags">
                        <span className="SkillTag">C</span>
                        <span className="SkillTag">C++</span>
                        <span className="SkillTag">Java</span>
                        <span className="SkillTag">JavaScript/TypeScript</span>
                        <span className="SkillTag">Rust</span>
                    </div>
                </div>

                <div className="SkillCard">
                    <h3 className="SkillHeader">Tools</h3>
                    <div className="SkillTags">
                        <span className="SkillTag">Git</span>
                        <span className="SkillTag">Docker</span>
                        <span className="SkillTag">Linux</span>
                        <span className="SkillTag">VSCode</span>
                        <span className="SkillTag">Postman</span>
                        <span className="SkillTag">SwaggerHub</span>
                        <span className="SkillTag">IntelliJ</span>
                    </div>
                </div>

                <div className="SkillCard">
                    <h3 className="SkillHeader">Skills</h3>
                    <div className="SkillTags">
                        <span className="SkillTag">Team-Oriented</span>
                        <span className="SkillTag">Fast Learner</span>
                        <span className="SkillTag">Critical Thinking</span>
                        <span className="SkillTag">Problem-Solving</span>
                        <span className="SkillTag">Adaptability</span>
                    </div>
                </div>
            </div>

            <div className="breakPoint"></div>
        </div>
    )
}

export default AboutMePage;