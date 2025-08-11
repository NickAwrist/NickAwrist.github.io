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
                    I am a full-time Software Engineer at Google, working on the Platform Payment Risk team. I am a graduate of the University of Central Florida with a Bachelor of Science in Computer Science.
                    I have a passion for creating software projects and solving complex problems, with experience in full-stack development and a strong foundation in Java.
                    I am always eager to learn new technologies and frameworks to expand my technical expertise.
                </p>
                <p>
                    Prior to joining Google, I gained valuable experience as a Software Engineer Intern at Ultimate Kronos Group (UKG), where I worked on the Identity and Access Management (IAM) team.
                    During my time at UCF, I also served as a tutor at the Student Academic Resource Center, helping fellow students with computer science concepts.
                    These experiences have shaped my collaborative approach to software development and my commitment to continuous learning and growth.
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
                <p style={{marginBottom: '5px'}}>Graduation: May 2025</p>
                <p style={{marginBottom: '15px'}}>GPA: 3.65</p>
                <p>
                <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Object-Oriented Programming, Software Engineering, Discrete Mathematics, Computer Logic & Organization
                </p>
            </div>

            <div className="breakPoint"></div>

            <h2>Technical Skills</h2> 
            <div className="Skills"> 
                <div className="SkillCard">
                    <h3 className="SkillHeader">Frameworks</h3>
                    <div className="SkillTags">
                        <span className="SkillTag">Springboot</span>
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
                        <span className="SkillTag">GoLang</span>
                    </div>
                </div>

                <div className="SkillCard">
                    <h3 className="SkillHeader">Tools</h3>
                    <div className="SkillTags">
                        <span className="SkillTag">Git</span>
                        <span className="SkillTag">Mercurial</span>
                        <span className="SkillTag">gRPC</span>
                        <span className="SkillTag">Docker</span>
                        <span className="SkillTag">Linux</span>
                        <span className="SkillTag">Postman</span>
                        <span className="SkillTag">SwaggerHub</span>
                        <span className="SkillTag">IntelliJ</span>
                        <span className="SkillTag">VSCode</span>

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