import React from 'react';
import ProjectCard from './components/ProjectCard';
import './App.css';

import projects from './data/projects.json';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="Header">
        <h1>Nicholas Aristizabal TEST</h1>
      </header>

      <h2>Social Media</h2>
      <div className="SocialMedia">

        <a href="https://github.com/NickAwrist" target="_blank" rel="noreferrer">
          <img className="icon_img" src="github_logo.png" alt="GitHub"/>
        </a>

        <a href="https://www.linkedin.com/in/nicholas-aristizabal-56ba6b235/" target="_blank" rel="noreferrer">
          <img className="icon_img" src="linkedin_logo.png" alt="Linkedin"/>
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
          <img src="ucf_icon.png" alt="UCF" style={{width: '30px', height: '30px'}} />

          <br />
          Bachelor of Science in Computer Science
          <br />
          Expected Graduation: May 2023
          <br />
          GPA: 3.65
        </p>
        <p>
          Relavant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Software Engineering, Discrete Mathematics, Computer Organization
        </p>
      </div>

      <div className="breakPoint"></div>

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
      
      </div>

      <div className="breakPoint"></div>

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
          <ul>
            <li>Assisted students with understanding course material</li>
            <li>Facilitated group study sessions</li>
            <li>Created study guides and practice problems</li>
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

      <h2>Contact</h2>
      <div className="ContactSection">
        <div className="ContactInfo">
          <p><strong>Email:</strong> <a href="mailto:nick@example.com">nicholas.aristizabal@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+19548123727">+1 (954)-812-3727</a></p>
        </div>
      </div>




    </div>
      
  );
};

export default App;
