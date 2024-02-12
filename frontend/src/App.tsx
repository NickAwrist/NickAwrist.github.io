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
        <h1>My Portfolio</h1>
      </header>
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
