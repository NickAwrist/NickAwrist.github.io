import React from 'react';
import './ProjectCard.css';
import { ProjectCardProps } from '../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageDirectory, onCardClick }) => {
  return (
    <div className="ProjectCard" onClick={onCardClick}>
      {imageDirectory && <img src={imageDirectory} alt={title} className="ProjectImage" />}
      <div className="ProjectInfo">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
