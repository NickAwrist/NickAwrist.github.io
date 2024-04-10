import React, { useState } from 'react';
import './ProjectCard.css';
import { ProjectCardProps } from '../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageDirectory }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="ProjectCard" onClick={handleClick}>
      <div className={`CardInner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="CardFront">
          <h3>{title}</h3>
        </div>
        <div className="CardBack">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};



export default ProjectCard;
