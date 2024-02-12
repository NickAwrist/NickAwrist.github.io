import React from 'react';
import ProjectCard from './components/ProjectCard'; // Make sure this is also a .tsx file with types
import './App.css';
import { Project } from './types';

// Example projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a brief description of Project 1.',
    imageDirectory: 'url-to-image', // Replace with actual image URL
  },
  
];

const App: React.FC = () => {
  const handleCardClick = (projectId: number) => {
    console.log(`Project ${projectId} was clicked.`);
    // Implementation for what happens on click, e.g., navigate to a detailed page
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nicholas Aristizabal</h1>
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

      <h2>About Me</h2>
      <div className="AboutMe">
        <p>
          I student at the University of Central Florida with a passion for creating software projects and solving problems. I have experience with
          full-stack development, and I am always eager to learn new technologies and frameworks. I am currently
          looking for new opportunities to grow and develop my skills.
        </p>
      </div>

      <div className="Skills">  

        <div>
          
          <div className="Skill">
            <h2 className="SkillHeader">Frameworks</h2>
            <ul>
              <li>ReactJS</li>
              <li>React Native</li>
              <li>NodeJS</li>
              <li>DiscordJS</li>
            </ul>
          </div>
        </div>

        <div>
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
        </div>

        <div>
          <div className="Skill">
            <h2 className="SkillHeader">Tools</h2>
            <ul>
              <li>Git</li>
              <li>VSCode</li>
              <li>Postman</li>
              <li>SwaggerHub</li>
              <li>IntelliJ</li>
            </ul>
          </div>
        </div>
      
      </div>
      

      <h2>Projects</h2>
      <div className="ProjectsContainer">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageDirectory={project.imageDirectory}
            onCardClick={() => handleCardClick(project.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
