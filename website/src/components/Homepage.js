import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 50px 0;
  align-items: center;
  background-color: #f2f2f2;
  padding: 50px;
  font-family: Arial, sans-serif;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 15px;
  width: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

class Homepage extends React.Component {
  state = {
    projects: [
      {
        title: 'Project 1',
        imageUrl: 'https://example.com/project1-image.jpg',
        description: 'Description 1',
      },
      {
        title: 'Project 2',
        imageUrl: 'https://example.com/project2-image.jpg',
        description: 'Description 2',
      },
      {
        title: 'Project 3',
        imageUrl: 'https://example.com/project3-image.jpg',
        description: 'Description 3',
      },
    ],
  };

  render() {
    return (
      <Container>
        <h1>Welcome to Our Student Projects Showcase</h1>
        <ProjectContainer>
          {this.state.projects.map((project, index) => (
            <ProjectCard key={index}>
              <Image src={project.imageUrl} alt={project.title} />
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
            </ProjectCard>
          ))}
        </ProjectContainer>
      </Container>
    );
  }
}

export default Homepage;
