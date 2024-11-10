import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #555;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

function Project({ title, description, image }) {
  return (
    <ProjectCard>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectCard>
  );
}
export default Project;
