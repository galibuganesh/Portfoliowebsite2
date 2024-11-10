import React from 'react';
import Project from './Project';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
`;

const projects = [
  {
    title: 'Jmeter',
    description: 'This is  Project on Jmeter load test and Stress test.',
    image: '',

  },
  {
    title: 'Portofolioweb',
    description: 'This is a project about portfolio website ',
    image: '',
  },
];

function Projects() {
  return (
    <ProjectsContainer id="projects">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </ProjectsContainer>
  );
}

export default Projects;
