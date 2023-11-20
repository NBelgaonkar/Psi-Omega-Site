import React from 'react';
import styled from 'styled-components';

// Styled component using arrow function
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PhilanthropySection = styled.section`
  margin-top: 20px;
  text-align: left;
  width: 80%;
`;

const PhilanthropyItem = styled.div`
  margin-bottom: 20px;
`;

// Implicit return in functional component
const ProjectsPage = () => (
  <PageContainer>
    <h1>Projects Page</h1>
    <PhilanthropySection>
      <h2>Philanthropy</h2>
      <PhilanthropyItem>
        <h3>Troy Community Center Food Bank</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in dui tempus convallis.</p>
      </PhilanthropyItem>
      <PhilanthropyItem>
        <h3>Deke's Diner</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      </PhilanthropyItem>
    </PhilanthropySection>
  </PageContainer>
);

export default ProjectsPage;
